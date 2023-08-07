import { Router } from 'express'
import { createProduct } from '../../controllers/product/add-product.js'
import { deleteProduct } from '../../controllers/product/delete-product.js'

const inputProductRouter = Router()

inputProductRouter.post('/create', createProduct)
inputProductRouter.put('/delete/:id', deleteProduct)

export default inputProductRouter
