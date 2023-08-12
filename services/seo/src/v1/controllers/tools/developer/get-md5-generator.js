import crypto from 'crypto'

export const getMD5Generator = (req, res) => {
  const { content } = req.body

  const md5Hash = crypto.createHash('md5').update(content).digest('hex')
  return res.send(md5Hash)
}
