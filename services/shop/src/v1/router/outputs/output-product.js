import { Router } from 'express'
import { productsFindAll } from '../../controllers/product/get-all-product.js'


const outPutProductRouter = Router();
outPutProductRouter.get('/findAll/:shopId', productsFindAll)

export default outPutProductRouter
