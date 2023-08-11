import whois from 'whois-json'

export const getWhoisLookup = async (req, res) => {
  const { domain } = req.query
  try {
    const result = await whois(domain)
    return res.status(200).send(result)
  } catch (error) {
    return res.status(404).send(error)
  }
}
