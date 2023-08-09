import { Router } from 'express'
import swagger from './swagger.js'
import outputUserRoutes from './outputs/output-user.js'
import outputWebsiteRoutes from './outputs/output-website.js'
import outputSeoRoutes from './outputs/output-seo.js'
import outputSecurityRoutes from './outputs/output-security.js'
import outputPerformanceRoutes from './outputs/output-performance.js'
import outputMiscellaneousRoutes from './outputs/output-miscellaneous.js'
import userInputRoutes from './inputs/input-user.js'
import inputSeoRoutes from './inputs/input-seo.js'
import inputPerformanceRoutes from './inputs/input-performance.js'
import inputSecurityRoutes from './inputs/input-security.js'

const index = Router()

index
  .use('/docs', swagger)
  .use('/user', outputUserRoutes, userInputRoutes)
  .use('/website', outputWebsiteRoutes)
  .use('/seo', outputSeoRoutes, inputSeoRoutes)
  .use('/security', outputSecurityRoutes, inputSecurityRoutes)
  .use('/performance', outputPerformanceRoutes, inputPerformanceRoutes)
  .use('/miscellaneous', outputMiscellaneousRoutes)

export default index
