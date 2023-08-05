import { Router } from 'express'
import { createProduct } from '../../controllers/product/product.js'

const productRouter = Router()

productRouter.post('/create/:shopId', createProduct)

export default productRouter
