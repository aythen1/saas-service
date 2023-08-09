import { Router } from 'express'
import { addCoupon } from '../../controllers/Coupon/add-Coupon.js'
import { deleteCoupon } from '../../controllers/Coupon/delete-Coupon.js'

const inputCouponRoute = Router()

inputCouponRoute.post('/create', addCoupon)
inputCouponRoute.put('/:id', deleteCoupon)

export default inputCouponRoute
