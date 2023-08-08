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

index.use(logInOut)
index.use(registerRouter)
index.use('/shop', inputShopRouter)
index.use('/shop', outPutShopRouter)
index.use('/product', inputProductRouter)
index.use('/product', outPutProductRouter)
index.use('/order', inputOrderRoute)
index.use('/order', outPutOrderRouter)
index.use('/shipping', inputShippingRouter)
index.use('/shipping', outPutShippingRouter)
index.use('/group', inputGroupRouter)
index.use('/group', outPutGroupRouter)
index.use('/category', inputCategoryRouter)
index.use('/category', outPutCategoryRouter)
index.use('/author', inputAuthorRoute)
index.use('/author', outputAuthorRoute)
index.use('/socialMedia', inputSocialMedia)
index.use('/socialMedia', outputSocialMedia)
index.use('/service', inputServiceRoute)
index.use('/service', outPutServiceRouter)
index.use('/speciality', inputSpecialityRouter)
index.use('/speciality', outPutSpecialityRouter)
index.use('/review', inputReviewRouter)
index.use('/review', outPutReviewRouter)

index.use('/index', routerUser)
index.get('/', (req, res) => {
  console.log(req.session)
  res.json({ user: req.session })
})

export default index
