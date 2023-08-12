export const getUrlParser = (req, res) => {
  const { url } = req.body

  const parsedURL = new URL(url)

  return res.send({
    scheme: parsedURL.protocol.replace(':', ''),
    host: parsedURL.hostname
  })
}
