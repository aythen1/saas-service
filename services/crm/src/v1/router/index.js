import { Router } from 'express'
import routerUser from './user.js'
import swagger from './swagger.js'
import inputUserRoute from './inputs/input-user.js'
import outputUserRoutes from './outputs/output-user.js'

import inputPaymentRoutes from './inputs/input-payment.js'
import outputPaymentRoutes from './outputs/output-payment.js'

const index = Router()

index.use('/', swagger)
index.use('/index', routerUser)

index
  .use('/user', inputUserRoute, outputUserRoutes)

  .use('/payment', inputPaymentRoutes, outputPaymentRoutes)

export default index
