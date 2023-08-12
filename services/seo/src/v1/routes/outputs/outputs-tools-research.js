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
/**
 * @swagger
 * /api-v1/tools/serp-checker:
 *   get:
 *     description: Returns SERP Checker
 *     parameters:
 *      - name: keyword
 *        in: path
 *        required: true
 *      - name: domain
 *        in: path
 *        required: true
 *      - name: country
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: SERP Checker
 */
outputToolsResearchRoutes.get('/serp-checker', getSERP)
  /**
 * @swagger
 * /api-v1/tools/indexed-pages:
 *   get:
 *     description: Returns Indexed Pages
 *     parameters:
 *      - name: domain
 *        in: path
 *        required: true
 *      - name: country
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Indexed Pages
 */
  .get('/indexed-pages', getIndexedPages)
  /**
 * @swagger
 * /api-v1/tools/keyword-research:
 *   get:
 *     description: Returns Keyword Research
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Keyword Research
 */
  .get('/keyword-research', getKeywordResearch)
  /**
 * @swagger
 * /api-v1/tools/website-status:
 *   get:
 *     description: Returns Website Status
 *     parameters:
 *      - name: domain
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Website Status
 */
  .get('/website-status', getCheckWebsiteStatus)
  /**
 * @swagger
 * /api-v1/tools/ssl-checker:
 *   get:
 *     description: Returns SSL Checker
 *     parameters:
 *      - name: domain
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: SSL Checker
 */
  .get('/ssl-checker', getCheckSSL)
  /**
 * @swagger
 * /api-v1/tools/dns-lookup:
 *   get:
 *     description: Returns DNS lookup
 *     parameters:
 *      - name: domain
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: DNS lookup
 */
  .get('/dns-lookup', getDnsLookup)
  /**
 * @swagger
 * /api-v1/tools/whois-lookup:
 *   get:
 *     description: Returns WHOIS Lookup
 *     parameters:
 *      - name: domain
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: WHOIS Lookup
 */
  .get('/whois-lookup', getWhoisLookup)
  /**
 * @swagger
 * /api-v1/tools/ip-lookup:
 *   get:
 *     description: Returns IP Lookup
 *     parameters:
 *      - name: ip
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: IP Lookup
 */
  .get('/ip-lookup', getIpLookup)
  /**
 * @swagger
 * /api-v1/tools/reverse-ip-lookup:
 *   get:
 *     description: Returns Reverse IP Lookup
 *     parameters:
 *      - name: ip
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Reverse IP Lookup
 */
  .get('/reverse-ip-lookup', getReverseIpLookup)
  /**
 * @swagger
 * /api-v1/tools/domain-ip-lookup:
 *   get:
 *     description: Returns Domain IP Lookup
 *     parameters:
 *      - name: domain
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Domain IP Lookup
 */
  .get('/domain-ip-lookup', getDomainIpLookup)
  /**
 * @swagger
 * /api-v1/tools/redirect-checker:
 *   get:
 *     description: Returns Redirect Checker
 *     parameters:
 *      - name: url
 *        in: path
 *        required: true
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Redirect Checker
 */
  .get('/redirect-checker', getRedirectChecker)
  /**
 * @swagger
 * /api-v1/tools/idn-converter:
 *   get:
 *     description: Returns IDN Converter
 *     parameters:
 *      - name: domain
 *        in: path
 *        required: true
 *      - name: type
 *        in: path
 *        required: true
 *        example: text-to-punycode/punycode-to-text
 *     tags:
 *      - Tools Research
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: IDN Converter
 */
  .get('/idn-converter', getIdnConverter)

export default outputToolsResearchRoutes
