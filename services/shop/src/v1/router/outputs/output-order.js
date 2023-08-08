import { Router } from 'express'
import { getOrderByPk } from '../../controllers/order/get-id-order.js'

const outPutOrderRouter = Router()

outPutOrderRouter.get('/:id', getOrderByPk)

export default outPutOrderRouter
