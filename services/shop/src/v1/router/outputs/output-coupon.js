import { Router } from 'express'
import { getAllCoupon } from '../../controllers/coupon/get-all-coupon.js'
import { getCouponById } from '../../controllers/coupon/get-id-coupon.js'

const outPutCouponRouter = Router()

outPutCouponRouter.get('/all', getAllCoupon)
outPutCouponRouter.get('/:id', getCouponById)

export default outPutCouponRouter
