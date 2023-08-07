
import { Router } from 'express'
import { getShopByIdUser } from '../../controllers/shop/get-id-shop.js'


const outPutShopRouter = Router();

outPutShopRouter.get('/:idUser', getShopByIdUser)


export default outPutShopRouter
