import axios from 'axios'
import dns from 'dns'

export const getReverseIpLookup = async (req, res) => {
  const { ip } = req.query
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`)
    const ipInfo = response.data

    if (ipInfo.reverse !== '') {
      const hostnames = await dns.promises.reverse(ip)
      return res.send(hostnames[0])
    } else {
      return res.send(ipInfo.as)
    }
  } catch (error) {
    return res.status(404).send(error)
  }
}
