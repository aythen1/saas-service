


import { Router } from 'express'
import { createShop } from '../../controllers/shop/add-shop.js'
import { deleteShop } from '../../controllers/shop/delete-shop.js'


const inputShopRouter = Router();


inputShopRouter.post('/create', createShop)
inputShopRouter.put('/delete/:id', deleteShop)

export default inputShopRouter