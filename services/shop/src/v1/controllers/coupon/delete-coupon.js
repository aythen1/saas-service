import { Coupon } from '../../database/connection/connectionDB.js'

export const deleteCoupon = async (req, res, next) => {
  const { id } = req.params
  const coupon = await Coupon.findByPk(id)

  if (!coupon) {
    return res.status(404).send(`The CouponID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Coupon.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The couponID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
