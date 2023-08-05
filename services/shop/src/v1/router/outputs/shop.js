import { getShopByIdUser, createShop } from "../../controllers/shop/index.js";
import {Router} from "express";

const root_shop = Router()

root_shop.get('/shop/:idUser',getShopByIdUser)
root_shop.post('/shop',createShop)

export default root_shop;