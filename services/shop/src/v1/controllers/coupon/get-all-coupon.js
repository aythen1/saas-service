import { Coupon } from '../../database/connection/connectionDB.js'

export const getAllCoupon = async (req, res, next) => {
  try {
    const coupon = await Coupon.findAll()
    if (!coupon) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'coupon found', Coupon })
  } catch (error) {
    return next(error)
  }
}
