import UAParser from 'ua-parser-js'

export const getUserAgentParser = (req, res) => {
  const { userAgent } = req.body

  const parser = new UAParser()
  const result = parser.setUA(userAgent).getResult()

  const browser = result.browser.name
  const operatingSystem = result.os.name

  return res.send({
    browser,
    operatingSystem,
    userAgent
  })
}
