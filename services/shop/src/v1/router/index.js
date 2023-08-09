import { Router } from 'express'
import swagger from './swagger.js'
import registerRouter from './inputs/register.js'

// files imported
import routerUser from './user.js'
import logInOut from '../router/inputs/loginLogout.js'

// importaciones de inputs

import inputAnswerRoute from './inputs/input-answer.js'
import outPutAnswerRouter from './outputs/output-answer.js'
import outPutAttributeRoute from './outputs/output-attribute.js'
import inputAttributeRoute from './inputs/input-attribute.js'
import inputAuthorRoute from './inputs/input-author.js'
import outputAuthorRoute from './outputs/output-author.js'
import inputBannerRoute from './inputs/input-banner.js'
import outPutBannerRoute from './outputs/output-banner.js'
import inputCategoryRouter from './inputs/input-category.js'
import outPutCategoryRouter from './outputs/output-category.js'
import inputChatRoute from './inputs/input-chat.js'
import outPutChatRoute from './outputs/output-chat.js'
import inputCouponRoute from './inputs/input-coupon.js'
import outPutCouponRoute from './outputs/output-coupon.js'
import inputDeliveryRoute from './inputs/input-delivery.js'
import outPutDeliveryRoute from './outputs/output-delivery.js'
import inputGroupRouter from './inputs/input-group.js'
import outPutGroupRouter from './outputs/output-group.js'
import inputManufacturersRoute from './inputs/input-manufacturers.js'
import outPutManufacturersRoute from './outputs/output-manufacturers.js'
import inputOrderRoute from './inputs/input-order.js'
import outPutOrderRoute from './outputs/output-order.js'
import inputProductRoute from './inputs/input-product.js'
import outPutProductRoute from './outputs/output-product.js'
import inputQuestionRoute from './inputs/input-question.js'
import outPutQuestionRoute from './outputs/output-question.js'
import inputReviewRouter from './inputs/input-review.js'
import outPutReviewRouter from './outputs/output-review.js'
import inputSellRoute from './inputs/input-sell.js'
import outPutSellRoute from './outputs/output-sell.js'
import inputServiceRoute from './inputs/input-service.js'
import outPutServiceRouter from './outputs/output-service.js'
import inputShippingRouter from './inputs/input-shipping.js'
import outPutShippingRouter from './outputs/output-shipping.js'
import inputShopRouter from './inputs/input-shop.js'
import outPutShopRouter from './outputs/output-shop.js'
import inputSocialMedia from './inputs/input-socialMedia.js'
import outputSocialMedia from './outputs/output-socialMedia.js'
import inputSpecialityRouter from './inputs/input-speciality.js'
import outPutSpecialityRouter from './outputs/output-speciality.js'
import inputTagRoute from './inputs/input-tag.js'
import outPutTagRoute from './outputs/output-tag.js'
import inputTaxesRoute from './inputs/input-taxes.js'
import outPutTaxesRoute from './outputs/output-taxes.js'
import inputWithdrawalsRoute from './inputs/input-withdrawals.js'
import outPutWithdrawalsRoute from './outputs/output-withdrawals.js'

const index = Router()

index.use('/', swagger)
  .use(logInOut)
  .use(registerRouter)
  .use('/answer', inputAnswerRoute, outPutAnswerRouter)
  .use('/attribute', inputAttributeRoute, outPutAttributeRoute)
  .use('/author', inputAuthorRoute, outputAuthorRoute)
  .use('/banner', inputBannerRoute, outPutBannerRoute)
  .use('/category', inputCategoryRouter, outPutCategoryRouter)
  .use('/chat', inputChatRoute, outPutChatRoute)
  .use('/coupon', inputCouponRoute, outPutCouponRoute)
  .use('/delivery', inputDeliveryRoute, outPutDeliveryRoute)
  .use('/group', inputGroupRouter, outPutGroupRouter)
  .use('/manufacturers', inputManufacturersRoute, outPutManufacturersRoute)
  .use('/order', inputOrderRoute, outPutOrderRoute)
  .use('/product', inputProductRoute, outPutProductRoute)
  .use('/question', inputQuestionRoute, outPutQuestionRoute)
  .use('/review', inputReviewRouter, outPutReviewRouter)
  .use('/sell', inputSellRoute, outPutSellRoute)
  .use('/service', inputServiceRoute, outPutServiceRouter)
  .use('/shipping', inputShippingRouter, outPutShippingRouter)
  .use('/shop', inputShopRouter, outPutShopRouter)
  .use('/socialMedia', inputSocialMedia, outputSocialMedia)
  .use('/speciality', inputSpecialityRouter, outPutSpecialityRouter)
  .use('/tag', inputTagRoute, outPutTagRoute)
  .use('/taxes', inputTaxesRoute, outPutTaxesRoute)
  .use('/withdrawals', inputWithdrawalsRoute, outPutWithdrawalsRoute)

index.use('/index', routerUser)
index.get('/', (req, res) => {
  console.log(req.session)
  res.json({ user: req.session })
})

export default index
