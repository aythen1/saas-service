import axios from 'axios'
import { JSDOM } from 'jsdom'
import { Security, Website } from '../../database/conection/conectionDB.js'

export const addSecurity = async (req, res) => {
  const { url } = req.body

  if (!url) {
    return res.status(404).send('Url is missing')
  }
  try {
    const website = await Website.findOrCreate({ where: { domain: url } })

    const response = await axios.get(url)

    // usa protocolo https?
    const httpsEncryption = response.request.protocol === 'https:'

    const htmlText = response.data

    // conocer si hay contenido mixto
    const dom = new JSDOM(htmlText)
    const document = dom.window.document

    const mixedContentResources = []
    const allResources = document.querySelectorAll('img, script, link') // Puedes agregar más elementos aquí

    allResources.forEach((resource) => {
      const src = resource.getAttribute('src') || ''
      const href = resource.getAttribute('href') || ''

      if (src.startsWith('http://') || href.startsWith('http://')) {
        mixedContentResources.push(src || href)
      }
    })
    let mixedContent
    if (mixedContentResources.length > 0) {
      mixedContent = true
    } else {
      mixedContent = false
    }

    // public server signature
    const serverSignature = response.headers.server ? response.headers.server : ''

    // unsafe cross-origin links
    const unsafeCORS = []
    const allLinks = document.querySelectorAll('a') // Puedes agregar más elementos aquí

    allLinks.forEach((link) => {
      const href = link.getAttribute('href') || ''

      if (href.startsWith('http:')) {
        const origin = new URL(url).origin
        const linkOrigin = new URL(href).origin

        if (origin !== linkOrigin) {
          unsafeCORS.push(href)
        }
      }
    })

    // plaintext email
    const plaintextEmail = []
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g // Expresión regular para buscar correos electrónicos

    const textNodes = document.querySelectorAll('*:not(script):not(style)')
    textNodes.forEach((node) => {
      const text = node.textContent || ''
      const emailsInNode = text.match(emailPattern)

      if (emailsInNode) {
        plaintextEmail.push(...emailsInNode)
      }
    })

    const newSecurity = await Security.create({
      httpsEncryption,
      mixedContent,
      serverSignature,
      unsafeCORS,
      plaintextEmail
    })

    await website[0].setSecurity(newSecurity)

    return res.status(201).json(newSecurity)
  } catch (error) {
    return res.status(404).json(error)
  }
}
