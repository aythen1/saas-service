export const getUtmBuilder = (req, res) => {
  const { url, source, medium, campaign, term, content } = req.body
  const utmParams = new URLSearchParams()

  if (source) {
    utmParams.set('utm_source', source)
  }
  if (medium) {
    utmParams.set('utm_medium', medium)
  }
  if (campaign) {
    utmParams.set('utm_campaign', campaign)
  }
  if (term) {
    utmParams.set('utm_term', term)
  }
  if (content) {
    utmParams.set('utm_content', content)
  }

  const urlWithUTM = new URL(url)
  urlWithUTM.search = utmParams.toString()

  return res.send(urlWithUTM.href)
}
