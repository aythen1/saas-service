import { Router } from 'express'
import { createService } from '../../controllers/service/add-service.js'
import { deleteService } from '../../controllers/service/delete-service.js'

const inputServiceRoute = Router()

inputServiceRoute.post('/create/:UserId', createService)
inputServiceRoute.put('/delete', deleteService)

export default inputServiceRoute
