import axios from 'axios'
import { JSDOM } from 'jsdom'
import { load } from 'cheerio'
import { Miscellaneou, Website } from '../../database/connection/connectionDB.js'

export const addMiscellaneous = async (req, res) => {
  const { url } = req.body

  if (!url) {
    return res.status(404).send('Url is missing')
  }
  try {
    const website = await Website.findOrCreate({ where: { domain: url } })
    const response = await axios.get(url)
    const htmlText = response.data

    const dom = new JSDOM(htmlText)
    const document = dom.window.document

    const structuredData = []

    // Buscar elementos script con type="application/ld+json" (JSON-LD)
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]')
    jsonLdScripts.forEach((script) => {
      try {
        const data = JSON.parse(script.textContent)
        structuredData.push(JSON.stringify(data))
      } catch (error) {
        // Ignorar scripts inválidos JSON-LD
      }
    })

    // Buscar elementos con atributos "itemscope" (microdata)
    const microdataElements = document.querySelectorAll('[itemscope]')
    microdataElements.forEach((element) => {
      const itemData = {}
      const properties = element.querySelectorAll('[itemprop]')
      properties.forEach((property) => {
        const propName = property.getAttribute('itemprop')
        const propValue = property.textContent.trim()
        itemData[propName] = propValue
      })
      structuredData.push(JSON.stringify(itemData))
    })

    // Buscar metaetiquetas de Open Graph
    const ogMetaTags = document.querySelectorAll('meta[property^="og:"]')
    ogMetaTags.forEach((metaTag) => {
      const propertyName = metaTag.getAttribute('property')
      const propertyValue = metaTag.getAttribute('content')
      structuredData.push(JSON.stringify({ [propertyName]: propertyValue }))
    })

    // Buscar elementos con clases de Microformatos
    const microformatElements = document.querySelectorAll('.h-card, .h-entry, .h-event') // Agrega más clases aquí
    microformatElements.forEach((element) => {
      const itemData = {}
      const properties = element.querySelectorAll('[class^="p-"]')
      properties.forEach((property) => {
        const propName = property.classList[0].replace('p-', '')
        const propValue = property.textContent.trim()
        itemData[propName] = propValue
      })
      structuredData.push(JSON.stringify(itemData))
    })

    const $ = load(htmlText)
    // meta viewport
    const metaViewport = $('meta[name="viewport"]').attr('content')

    // character set
    const characterSet = $('meta[charset]').attr('charset')

    // sitemap
    const sitemap = []

    $('a').each((index, element) => {
      const href = $(element).attr('href')
      if (href && href.toLowerCase().endsWith('.xml') && href.toLowerCase().includes('sitemap')) {
        sitemap.push(href)
      }
    })

    // social links
    const socialNetworks = [
      { name: 'Facebook', pattern: /facebook\.com/i },
      { name: 'Twitter', pattern: /twitter\.com/i },
      { name: 'Instagram', pattern: /instagram\.com/i }
    // Agrega aquí más redes sociales y sus patrones
    ]
    const social = []
    $('a').each((index, element) => {
      const href = $(element).attr('href')
      socialNetworks.forEach(network => {
        if (network.pattern.test(href)) {
          social.push({ name: network.name, url: href })
        }
      })
    })

    // content length
    const plainText = htmlText.replace(/<[^>]+>/g, '')
    // Dividir el texto en palabras
    const words = plainText.split(/\s+/)
    // Filtrar las palabras vacías (espacios en blanco)
    const contentLength = words.filter(word => word.trim() !== '').length

    // text to HTML ratio
    // Calcular la cantidad total de caracteres en el HTML y el texto
    const totalHtmlChars = htmlText.length
    const totalTextChars = plainText.length

    // Calcular el porcentaje de texto con respecto al HTML
    const textToHtmlRatio = ((totalTextChars / totalHtmlChars) * 100).toFixed(2)

    // inline Css
    const inlineCss = []

    $('[style]').each((index, element) => {
      const style = $(element).attr('style')
      if (style) {
        inlineCss.push(style)
      }
    })

    // deprecated HTML
    const deprecatedTags = [
      'acronym', 'applet', 'basefont', 'big', 'center', 'dir',
      'font', 'frame', 'frameset', 'isindex', 'noframes', 's', 'strike', 'tt'
    ]
    const deprecatedHtml = []

    deprecatedTags.forEach(tag => {
      if ($(tag).length > 0) {
        deprecatedHtml.push(tag)
      }
    })

    const newMiscellaneous = await Miscellaneou.create({
      structuredData,
      metaViewport,
      characterSet,
      sitemap,
      social,
      contentLength,
      textToHtmlRatio,
      inlineCss,
      deprecatedHtml
    })

    await website[0].setMiscellaneou(newMiscellaneous)

    return res.status(201).send(newMiscellaneous)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
