import { Router } from 'express'
import { getAllDelivery } from '../../controllers/delivery/get-all-delivery.js'
import { getDeliveryById } from '../../controllers/delivery/get-id-delivery.js'

const outPutDeliveryRouter = Router()

outPutDeliveryRouter.get('/all', getAllDelivery)
outPutDeliveryRouter.get('/:id', getDeliveryById)

export default outPutDeliveryRouter
