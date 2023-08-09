import { Coupon } from '../../database/connection/connectionDB.js'

export const getCouponById = async (req, res, next) => {
  const { id } = req.params
  try {
    const coupon = await Coupon.findByPk(id)
    if (!coupon) {
      return res.status(404).send(`The couponId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'Coupon found', coupon })
  } catch (error) {
    return next(error)
  }
}
