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

outputToolsResearchRoutes.get('/serp-research', getSERP)

outputToolsResearchRoutes.get('/indexed-pages-research', getIndexedPages)

outputToolsResearchRoutes.get('/keyword-research', getKeywordResearch)

outputToolsResearchRoutes.get('/website-status-research', getCheckWebsiteStatus)

outputToolsResearchRoutes.get('/ssl-checker-research', getCheckSSL)

outputToolsResearchRoutes.get('/dns-lookup-research', getDnsLookup)

outputToolsResearchRoutes.get('/whois-lookup-research', getWhoisLookup)

outputToolsResearchRoutes.get('/ip-lookup-research', getIpLookup)

outputToolsResearchRoutes.get('/reverse-ip-lookup-research', getReverseIpLookup)

outputToolsResearchRoutes.get('/domain-ip-lookup-research', getDomainIpLookup)

outputToolsResearchRoutes.get('/redirect-checker-research', getRedirectChecker)

outputToolsResearchRoutes.get('/idn-converter-research', getIdnConverter)

export default outputToolsResearchRoutes
