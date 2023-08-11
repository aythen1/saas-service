import axios from 'axios'

export const getRedirectChecker = async (req, res) => {
  const { url } = req.query
  try {
    const response = await axios.get(url, { maxRedirects: 0 })

    return res.send({
      originalUrl: url,
      originalStatus: response.status,
      redirectedUrl: response.headers.location || null,
      redirectedStatus: response.headers.location ? (await axios.get(response.headers.location)).status : null
    })
  } catch (error) {
    return res.send({
      originalUrl: url,
      originalStatus: error.response ? error.response.status : null,
      redirectedUrl: null,
      redirectedStatus: null
    })
  }
}
