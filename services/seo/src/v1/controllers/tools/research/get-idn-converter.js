export const getIdnConverter = async (req, res) => {
  const { domain, type } = req.query

  if (type === 'text-to-punycode') {
    try {
      const punycodeDomain = encodeURI(domain).replace(/%../g, m => m.toLowerCase())
      return res.send(punycodeDomain)
    } catch (error) {
      return res.status(404).send(error)
    }
  }

  if (type === 'punycode-to-text') {
    try {
      const textDomain = decodeURI(domain)
      return res.send(textDomain)
    } catch (error) {
      return res.status(404).send(error)
    }
  }

  return res.status(404).send('type is invalid or never passed')
}
