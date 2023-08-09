import { Router } from 'express'
import routerUser from './user.js'
import swagger from './swagger.js'
import inputUserRoute from './inputs/input-user.js'
import outputUserRoutes from './outputs/output-user.js'
import inputPaymentRoutes from './inputs/input-payment.js'
import outputPaymentRoutes from './outputs/output-payment.js'
import inputEventRoutes from './inputs/input-event.js'
import outputEventRoutes from './outputs/output-event.js'
import inputNoteRoutes from './inputs/input-note.js'
import outputNoteRoutes from './outputs/output-note.js'
import inputCallRoutes from './inputs/input-call.js'
import outputCallRoutes from './outputs/output-call.js'

const index = Router()

index.use('/', swagger)
index.use('/index', routerUser)

index
  .use('/user', inputUserRoute, outputUserRoutes)
  .use('/event', inputEventRoutes, outputEventRoutes)
  .use('/payment', inputPaymentRoutes, outputPaymentRoutes)
  .use('/note', inputNoteRoutes, outputNoteRoutes)
  .use('/call', inputCallRoutes, outputCallRoutes)

export default index
