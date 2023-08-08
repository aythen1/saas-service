import { Router } from 'express'
import { getShippingByPk } from '../../controllers/shipping/get-id-shipping.js'

const outPutShippingRouter = Router()

outPutShippingRouter.get('/:id', getShippingByPk)

export default outPutShippingRouter
