import { Router } from 'express'
import { getOrderByPk } from '../../controllers/order/get-id-order.js'

const outPutOrderRoute = Router()

outPutOrderRoute.get('/:id', getOrderByPk)

export default outPutOrderRoute
