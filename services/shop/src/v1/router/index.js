import { Router } from 'express'
import swagger from './swagger.js'
import registerRouter from './inputs/register.js'


// files imported
import routerUser from './user.js'
import logInOut from '../router/inputs/loginLogout.js'
import inputShopRouter from './inputs/input-shop.js'
import outPutShopRouter from './outputs/output-shop.js'
import inputProductRouter from './inputs/input-product.js'
import outPutProductRouter from './outputs/output-product.js'
import inputOrderRoute from './inputs/input-order.js'
import outPutOrderRouter from './outputs/output-order.js'

const index = Router()

index.use('/', swagger)

index.use(logInOut)
index.use(registerRouter)
index.use('/shop', inputShopRouter)
index.use('/shop', outPutShopRouter)
index.use('/product', inputProductRouter)
index.use('/product', outPutProductRouter)
index.use('/order', inputOrderRoute)
index.use('/order', outPutOrderRouter)

index.use('/index', routerUser)
index.get('/', (req, res) => {
  console.log(req.session)
  res.json({ user: req.session })
})

export default index
