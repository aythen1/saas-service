


import { Router } from 'express'
import { createShop } from '../../controllers/shop/add-shop.js'


const inputShopRouter = Router();


inputShopRouter.post('/', createShop)

export default inputShopRouter