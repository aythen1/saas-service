import { Coupon } from '../../database/connection/connectionDB.js'

export const addCoupon = async (req, res, next) => {
  const { image, code, description, amount, activeFrom, willExpire } = req.body

  try {
    if (!image && !code && description && amount && activeFrom && willExpire) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newCoupon = await Coupon.create(req.body)
      return res
        .status(201)
        .json({ message: 'coupon creado correctamente ', newCoupon })
    }
  } catch (error) {
    return next(error)
  }
}
