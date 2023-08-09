import { Router } from 'express'
import { addDelivery } from '../../controllers/Delivery/add-Delivery.js'
import { deleteDelivery } from '../../controllers/Delivery/delete-Delivery.js'

const inputDeliveryRoute = Router()

inputDeliveryRoute.post('/create', addDelivery)
inputDeliveryRoute.put('/:id', deleteDelivery)

export default inputDeliveryRoute
