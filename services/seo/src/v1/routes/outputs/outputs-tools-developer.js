import { Router } from 'express'
import { getColorConverter } from '../../controllers/tools/developer/get-color-converter.js'
import { getCssMinifier } from '../../controllers/tools/developer/get-css-minifier.js'
import { getHtmlMinifier } from '../../controllers/tools/developer/get-html-minifier.js'
import { getJsMinifier } from '../../controllers/tools/developer/get-js-minifier.js'
import { getJsonValidator } from '../../controllers/tools/developer/get-json-validator.js'
import { getMD5Generator } from '../../controllers/tools/developer/get-md5-generator.js'
import { getPasswordGenerator } from '../../controllers/tools/developer/get-password-generator.js'
import { getQrGenerator } from '../../controllers/tools/developer/get-qr-generator.js'
import { getUrlParser } from '../../controllers/tools/developer/get-url-parser.js'
import { getUserAgentParser } from '../../controllers/tools/developer/get-user-agent-parser.js'
import { getUtmBuilder } from '../../controllers/tools/developer/get-utm-builder.js'
import { getUuidGenerator } from '../../controllers/tools/developer/get-uuid-generator.js'

const outputToolsDeveloperRoutes = Router()

outputToolsDeveloperRoutes.post('/color-converter', getColorConverter)

  .post('/css-minifier', getCssMinifier)

  .post('/html-minifier', getHtmlMinifier)

  .post('/js-minifier', getJsMinifier)

  .post('/json-validator', getJsonValidator)

  .post('/md5-generator', getMD5Generator)

  .post('/password-generator', getPasswordGenerator)

  .post('/qr-generator', getQrGenerator)

  .post('/url-parser', getUrlParser)

  .post('/user-agent-parser', getUserAgentParser)

  .post('/utm-builder', getUtmBuilder)

  .get('/uuid-generator', getUuidGenerator)

export default outputToolsDeveloperRoutes
