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
import inputShippingRouter from './inputs/input-shipping.js'
import outPutShippingRouter from './outputs/output-shipping.js'
import inputGroupRouter from './inputs/input-group.js'
import outPutGroupRouter from './outputs/output-group.js'
import inputCategoryRouter from './inputs/input-category.js'
import outPutCategoryRouter from './outputs/output-category.js'
import inputAuthorRoute from './inputs/input-author.js'
import outputAuthorRoute from './outputs/output-author.js'
import inputSocialMedia from './inputs/input-socialMedia.js'
import outputSocialMedia from './outputs/output-socialMedia.js'
import inputServiceRoute from './inputs/input-service.js'
import outPutServiceRouter from './outputs/output-service.js'
import inputSpecialityRouter from './inputs/input-speciality.js'
import outPutSpecialityRouter from './outputs/output-speciality.js'
import inputReviewRouter from './inputs/input-review.js'
import outPutReviewRouter from './outputs/output-review.js'

const index = Router()

index.use('/', swagger)
.use(logInOut)
.use(registerRouter)
.use('/shop', inputShopRouter, outPutShopRouter)
.use('/product', inputProductRouter, outPutProductRouter)
.use('/order', inputOrderRoute, outPutOrderRouter)
.use('/shipping', inputShippingRouter,  outPutShippingRouter)
.use('/group', inputGroupRouter, outPutGroupRouter)
.use('/category', inputCategoryRouter, outPutCategoryRouter)
.use('/author', inputAuthorRoute, outputAuthorRoute)
.use('/socialMedia', inputSocialMedia, outputSocialMedia)
.use('/service', inputServiceRoute, outPutServiceRouter)
.use('/speciality', inputSpecialityRouter, outPutSpecialityRouter)
.use('/review', inputReviewRouter, outPutReviewRouter)

index.use('/index', routerUser)
index.get('/', (req, res) => {
  console.log(req.session)
  res.json({ user: req.session })
})

export default index
