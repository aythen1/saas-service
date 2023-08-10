import { Router } from 'express'
import { getProductsOfShop } from '../../controllers/product/get-all-shopId-product.js'

const outPutProductRouter = Router()
outPutProductRouter.get('/findAll/:shopId', getProductsOfShop)

export default outPutProductRouter
