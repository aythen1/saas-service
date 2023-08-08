import { Router } from 'express'
import routerUser from './user.js'
import swagger from './swagger.js'
import inputUserRoute from './inputs/input-user.js'
import outputUserRoutes from './outputs/output-user.js'
const index = Router()

index.use('/', swagger)
index.use('/index', routerUser)

index.use('/user', inputUserRoute, outputUserRoutes)

export default index
