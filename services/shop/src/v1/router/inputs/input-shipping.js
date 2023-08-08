import { Router } from 'express'
import { addShipping } from '../../controllers/shipping/add-shipping.js'
import { deleteShipping } from '../../controllers/shipping/delete-shipping.js'

const inputShippingRouter = Router()

inputShippingRouter.post('/create', addShipping)
inputShippingRouter.put('/delete/:id', deleteShipping)

export default inputShippingRouter
