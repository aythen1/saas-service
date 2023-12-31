import axios from 'axios'
import { load } from 'cheerio'
import { Seo, Website, Headers, User } from '../../database/connection/connectionDB.js'

export const addSeo = async (req, res) => {
  const { url, userId } = req.body

  if (!url) {
    return res.status(404).send('Url is missing')
  }

  try {
    const user = await User.findByPk(userId)
    const website = await Website.findOrCreate({ where: { domain: url } })

    if (!website[0].UserId) await user.addWebsite(website[0])

    const response = await axios.get(url)
    const $ = load(response.data)

    // Obtener la etiqueta <title> y su contenido
    const title = $('title').text()

    // Obtener la etiqueta de metadescripción <meta name="description"> y su contenido
    const metaDescription = $('meta[name="description"]').attr('content')

    // Obtener las palabras clave de contenido (relacionadas al título)
    const titleKeywords = title.split(' ')
    const keywordsInContent = []
    $('p').each((index, element) => {
      const paragraphContent = $(element).text().toLowerCase()
      titleKeywords.forEach((keyword) => {
        if (
          keyword.trim() &&
          paragraphContent.includes(keyword.toLowerCase())
        ) {
          keywordsInContent.push(keyword)
        }
      })
    })
    const contentKeywords = keywordsInContent.filter(
      (keyword) => keyword.trim() !== ''
    ).filter((value, index, self) => {
      return self.indexOf(value) === index
    })

    // Obtener las palabras clave de imagen (según el atributo alt de cada imagen)
    const allImages = $('img')
    const imageKeywords = allImages
      .filter((index, element) => !$(element).attr('alt'))
      .map((index, element) => $(element).attr('src'))
      .get()

    // Verificar si el dominio es amigable con SEO
    const checkFriendlySeo = !!title && !!metaDescription
    const friendlySeoUrl = checkFriendlySeo ? url : ''

    // Verificar si el dominio tiene páginas de error 404
    const has404Page = async () => {
      try {
        // Intentar acceder a una URL que sabes que no existe
        const errorUrl = `${url}/404-55d83d85f11da3154c7cb2b4364ee9a9`
        const response = await axios.get(errorUrl)
        if (response.status === 404) {
          return errorUrl
        } else {
          return ''
        }
      } catch (error) {
        const errorUrl = `${url}/404-55d83d85f11da3154c7cb2b4364ee9a9`
        if (error.response && error.response.status === 404) {
          return errorUrl
        } else {
          return ''
        }
      }
    }

    const page404 = await has404Page()

    // Verificar si se puede acceder a la página mediante motores de búsqueda (robots.txt)
    const robotsTxtResponse = await axios.get(`${url}/robots.txt`)
    const robotsTxt = robotsTxtResponse.status === 200

    // Buscar noindex
    const noindexTags = $('meta[name="robots"][content="noindex"]')
    const noindex = []
    noindexTags.each((index, element) => {
      const content = $(element).attr('content')
      noindex.push(content)
    })

    // Obtener el idioma declarado
    const language = $('html').attr('lang')

    // Verificar si el dominio tiene un favicon
    const favicon = $('link[rel="icon"]').attr('href')

    // Obtener los enlaces en la página en JavaScript
    const allLinks = $('a')
    const linksOnPage = allLinks
      .map((index, element) => $(element).attr('href'))
      .get()

    const newSeo = await Seo.create({
      title,
      metaDescription,
      contentKeywords,
      imageKeywords,
      friendlySeoUrl,
      page404,
      robotsTxt,
      noindex,
      language,
      favicon,
      linksOnPage
    })

    // Obtener los encabezados (h1, h2, h3, h4) y sus contenidos
    const headers = $('h1, h2, h3, h4')
      .map((index, element) => {
        return {
          type: $(element).prop('tagName').toLowerCase(),
          content: $(element).text()
        }
      })
      .get()

    const h1 = headers
      .filter((header) => header.type === 'h1')
      .map((header) => header.content)
    const h2 = headers
      .filter((header) => header.type === 'h2')
      .map((header) => header.content)
    const h3 = headers
      .filter((header) => header.type === 'h3')
      .map((header) => header.content)
    const h4 = headers
      .filter((header) => header.type === 'h4')
      .map((header) => header.content)

    const allHeaders = await Headers.create({ h1, h2, h3, h4 })

    await newSeo.setHeader(allHeaders)

    await website[0].setSeo(newSeo)

    res.status(201).send(newSeo)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

/*
"email": "mario@caballero.com",
"password": "abcdefgh"
"url": "https://autoescuelaroan.com",
"userId": 1
*/
