import dns from 'dns'

export const getDnsLookup = async (req, res) => {
  const { domain } = req.query
  try {
    const result = {}

    const { address, family } = await dns.promises.lookup(domain)
    result.A = { address, family }

    const addressesAAAA = await dns.promises.resolve4(domain)
    result.AAAA = addressesAAAA

    const cname = await dns.promises.resolveCname(domain)
    result.CNAME = cname

    const mxRecords = await dns.promises.resolveMx(domain)
    result.MX = mxRecords

    const txtRecords = await dns.promises.resolveTxt(domain)
    result.TXT = txtRecords

    const nsRecords = await dns.promises.resolveNs(domain)
    result.NS = nsRecords

    return res.status(200).send(result)
  } catch (error) {
    return res.status(404).send(error)
  }
}
