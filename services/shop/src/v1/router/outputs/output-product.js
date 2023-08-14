import { Router } from 'express'
import { getProductsOfShop } from '../../controllers/product/get-all-shopId-product.js'
import { getProductsOfOrder } from '../../controllers/product/get-all-orderId-prodcut.js'

const outPutProductRouter = Router()
outPutProductRouter.get('/findAll/:shopId', getProductsOfShop)
outPutProductRouter.get('/findAll/:orderId', getProductsOfOrder)

export default outPutProductRouter
