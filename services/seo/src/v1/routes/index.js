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

const index = Router()

index.use('/docs', swagger)
index.use('/output/user', outputUserRoutes)
index.use('/input/user', userInputRoutes)
index.use('/output/website', outputWebsiteRoutes)
index.use('/output/seo', outputSeoRoutes)
index.use('/input/seo', inputSeoRoutes)
index.use('/output/security', outputSecurityRoutes)
index.use('/output/performance', outputPerformanceRoutes)
index.use('/output/miscellaneous', outputMiscellaneousRoutes)

export default index
