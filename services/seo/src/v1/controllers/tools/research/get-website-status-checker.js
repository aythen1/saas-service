import axios from 'axios'

export const getCheckWebsiteStatus = async (req, res) => {
  const { domain } = req.query
  try {
    const startTime = new Date()
    const response = await axios.get(domain)
    const endTime = new Date()
    const loadTime = endTime - startTime

    return res.status(200).send({
      url: domain,
      status: 'online',
      code: response.status,
      loadTime: `${loadTime} ms`
    })
  } catch (error) {
    if (error.response) {
      return res.status(200).send({
        url: domain,
        status: 'online',
        code: error.response.status,
        loadTime: 'N/A'
      })
    } else {
      return res.status(200).send({
        url: domain,
        status: 'offline',
        code: 'N/A',
        loadTime: 'N/A'
      })
    }
  }
}
