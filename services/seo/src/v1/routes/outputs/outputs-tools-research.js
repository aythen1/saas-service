import { Router } from 'express'
import { getSERP } from '../../controllers/tools/research/get-serp-checker.js'
import { getIndexedPages } from '../../controllers/tools/research/get-indexed-pages.js'
import { getKeywordResearch } from '../../controllers/tools/research/get-keyword-research.js'
import { getCheckWebsiteStatus } from '../../controllers/tools/research/get-website-status-checker.js'
import { getCheckSSL } from '../../controllers/tools/research/get-ssl-checker.js'
import { getDnsLookup } from '../../controllers/tools/research/get-dns-lookup.js'
import { getWhoisLookup } from '../../controllers/tools/research/get-whois-lookup.js'
import { getIpLookup } from '../../controllers/tools/research/get-ip-lookup.js'
import { getReverseIpLookup } from '../../controllers/tools/research/get-reverse-ip-lookup.js'
import { getDomainIpLookup } from '../../controllers/tools/research/get-domain-ip-lookup.js'
import { getRedirectChecker } from '../../controllers/tools/research/get-redirect-checker.js'
import { getIdnConverter } from '../../controllers/tools/research/get-idn-converter.js'

const outputToolsResearchRoutes = Router()

outputToolsResearchRoutes.get('/serp-checker', getSERP)

  .get('/indexed-pages', getIndexedPages)

  .get('/keyword', getKeywordResearch)

  .get('/website-status', getCheckWebsiteStatus)

  .get('/ssl-checker', getCheckSSL)

  .get('/dns-lookup', getDnsLookup)

  .get('/whois-lookup', getWhoisLookup)

  .get('/ip-lookup', getIpLookup)

  .get('/reverse-ip-lookup', getReverseIpLookup)

  .get('/domain-ip-lookup', getDomainIpLookup)

  .get('/redirect-checker', getRedirectChecker)

  .get('/idn-converter', getIdnConverter)

export default outputToolsResearchRoutes
