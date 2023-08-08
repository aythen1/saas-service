import { Router } from 'express'
import { addOrder } from '../../controllers/order/add-order.js'
import { deleteOrder } from '../../controllers/order/delete-order.js'

const inputOrderRoute = Router()

inputOrderRoute.post('/create', addOrder)
inputOrderRoute.put('/delete/:id', deleteOrder)

export default inputOrderRoute
