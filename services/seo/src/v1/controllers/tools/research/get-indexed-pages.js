import axios from 'axios'
import { load } from 'cheerio'

export const getIndexedPages = async (req, res) => {
  const { domain, country } = req.query
  try {
    const searchUrl = `https://www.google.com/search?q=site:${encodeURIComponent(domain)}&gl=${country}`
    const response = await axios.get(searchUrl)

    const $ = load(response.data)
    const resultStats = $('div#resultStats').text()

    const match = resultStats.match(/(\d+(,\d+)*)/)
    if (match) {
      const indexedPagesCount = parseInt(match[1].replace(/,/g, ''), 10)
      return res.status(200).send({
        domain,
        status: 'indexed',
        indexedPagesCount
      })
    } else {
      return res.status(404).send('No se pudo obtener el número de páginas indexadas.')
    }
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
