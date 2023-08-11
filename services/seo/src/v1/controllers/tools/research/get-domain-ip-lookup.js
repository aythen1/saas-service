import axios from 'axios'

export const getDomainIpLookup = async (req, res) => {
  const { domain } = req.query
  try {
    const response = await axios.get(`http://ip-api.com/json/${domain}`)
    const ip = response.data.query
    const ipDataResponse = await axios.get(`http://ip-api.com/json/${ip}`)
    const ipData = ipDataResponse.data

    return res.send({
      ip,
      country: ipData.country,
      city: ipData.city,
      postalCode: ipData.zip,
      latitude: ipData.lat,
      longitude: ipData.lon,
      timezone: ipData.timezone
    })
  } catch (error) {
    return res.status(404).send(error)
  }
}
