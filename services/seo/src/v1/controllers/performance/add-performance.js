/* eslint-disable indent */
import axios from 'axios'
import { load } from 'cheerio'
import zlib from 'zlib'
import { Performance, Website, User } from '../../database/connection/connectionDB.js'

export const addPerformance = async (req, res) => {
  const { url, userId } = req.body

  if (!url) {
    return res.status(404).send('Url is missing')
  }

  try {
    const user = await User.findByPk(userId)
    const website = await Website.findOrCreate({ where: { domain: url } })

    if (!website[0].UserId) await user.addWebsite(website[0])

    // Calcula el tiempo de carga sin recursos externos
    const startTimestamp = Date.now()

    const response = await axios.get(url)
    const html = response.data

    const endTimestamp = Date.now()
    const loadTime = endTimestamp - startTimestamp

    const $ = load(html)

    // Calcular el tamaño del HTML original
    const pageSize = new TextEncoder().encode(html).length

    // Calcular el tamaño comprimido del HTML
    const compressedData = zlib.deflateSync(html)
    const textCompression = compressedData.length

    // Contar las solicitudes HTTP/S por tipo (JS, CSS, imágenes)
    const httpRequestJs = []
    const httpRequestCss = []
    const requestedImages = []

    // Guardar URLs de solicitudes de scripts (JS)
    $('script[src]').each((index, element) => {
      const src = $(element).attr('src')
      if (src.endsWith('.js')) {
        httpRequestJs.push(src)
      }
    })

    // Guardar URLs de solicitudes de estilos (CSS)
    $('link[rel="stylesheet"]').each((index, element) => {
      const href = $(element).attr('href')
      if (href.includes('.css')) {
        httpRequestCss.push(href)
      }
    })

    // Guardar URLs de solicitudes de imágenes
    $('img[src], img[data-src]').each((index, element) => {
      const src = $(element).attr('src') || $(element).attr('data-src')
      if (src.match(/\.(png|jpg|jpeg|gif)$/i)) {
        requestedImages.push(src)
      }
    })

    const httpRequestImages = requestedImages.filter((img) =>
      img.includes('http')
    )

    // // Image format modern
    const imageFormatAvif = httpRequestImages.filter((img) =>
      img.includes('.avif')
    )
    const imageFormatWebP = httpRequestImages.filter((img) =>
      img.includes('.webp')
    )
    const imageFormatOther = httpRequestImages.filter(
      (img) => !img.includes('.webp') && !img.includes('.avif')
    )

    // javascript defer
    const javascriptDefer = []

    $('script[src]').each((index, element) => {
      const src = $(element).attr('src')
      const deferAttr = $(element).attr('defer')

      if (src.endsWith('.js') && !deferAttr) {
        javascriptDefer.push(src)
      }
    })

    // Cuenta el número de nodos HTML en el DOM
    const domSize = $('*').length

    const newPerformance = await Performance.create({
      textCompression,
      loadTime,
      pageSize,
      httpRequestJs,
      httpRequestCss,
      httpRequestImages,
      imageFormatAvif,
      imageFormatWebP,
      imageFormatOther,
      javascriptDefer,
      domSize
    })

    await website[0].setPerformance(newPerformance)

    return res.status(201).send(newPerformance)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
