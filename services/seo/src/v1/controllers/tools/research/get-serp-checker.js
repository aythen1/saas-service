import axios from 'axios'
import { load } from 'cheerio'

export const getSERP = async (req, res) => {
  const { keyword, domain, country } = req.query

  try {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(keyword)}&gl=${country}`
    const response = await axios.get(searchUrl)

    const $ = load(response.data)
    const results = []

    $('div.g').each((index, element) => {
      const relativeUrl = $(element).find('a').attr('href')
      if (relativeUrl) {
        const absoluteUrl = 'https://www.google.com' + relativeUrl
        if (absoluteUrl.includes(domain)) {
          results.push(absoluteUrl)
        }
      }
    })
    return res.status(200).send(results.slice(0, 10))
  } catch (error) {
    return res.status(404).send(error.mesagge)
  }
}
