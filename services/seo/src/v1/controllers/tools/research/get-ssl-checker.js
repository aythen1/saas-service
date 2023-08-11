import openssl from 'openssl-wrapper'
import moment from 'moment'

export const getCheckSSL = async (req, res) => {
  const { domain } = req.query
  try {
    const certificateInfo = await openssl('s_client', {
      host: domain,
      port: 443,
      cert: '/dev/null',
      key: '/dev/null',
      CAfile: '/dev/null',
      verify: false,
      quiet: true,
      showcerts: true
    })

    const certificateDetails = certificateInfo.match(/Certificate:\n(.*?)(\n\n|$)/s)[1]
    const issuer = certificateDetails.match(/Issuer: (.*?)\n/)[1]
    const organization = certificateDetails.match(/O = (.*?)\n/)[1]
    const signatureAlgorithm = certificateDetails.match(/Signature Algorithm: (.*?)\n/)[1]
    const issuedDate = moment(certificateDetails.match(/Not Before: (.*?)\n/)[1], 'MMM DD HH:mm:ss YYYY Z').toISOString()
    const expirationDate = moment(certificateDetails.match(/Not After: (.*?)\n/)[1], 'MMM DD HH:mm:ss YYYY Z').toISOString()

    return res.status(200).send({
      domain,
      status: 'valid',
      issuer,
      organization,
      signatureAlgorithm,
      issuedDate,
      expirationDate
    })
  } catch (error) {
    return res.status(200).send({
      domain,
      status: 'invalid',
      issuer: 'N/A',
      organization: 'N/A',
      signatureAlgorithm: 'N/A',
      issuedDate: 'N/A',
      expirationDate: 'N/A'
    })
  }
}
