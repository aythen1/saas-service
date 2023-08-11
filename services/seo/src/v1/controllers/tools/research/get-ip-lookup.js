import axios from 'axios'

export const getIpLookup = async (req, res) => {
  const { ip } = req.query
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`)
    const ipInfo = response.data

    return res.status(200).send({
      ip,
      country: ipInfo.country,
      city: ipInfo.city,
      postalCode: ipInfo.zip,
      latitude: ipInfo.lat,
      longitude: ipInfo.lon,
      timezone: ipInfo.timezone
    })
  } catch (error) {
    return res.status(404).send(error)
  }
}
