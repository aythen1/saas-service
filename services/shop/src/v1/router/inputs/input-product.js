import { Router } from 'express'
import { createProduct } from '../../controllers/product/add-product.js'
import { deleteProduct } from '../../controllers/product/delete-product.js'

const inputProductRoute = Router()

inputProductRoute.post('/create', createProduct)
inputProductRoute.put('/delete/:id', deleteProduct)

export default inputProductRoute
