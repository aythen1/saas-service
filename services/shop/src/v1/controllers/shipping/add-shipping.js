import { Shipping } from '../../database/connection/connectionDB.js'

export const addShipping = async (req, res, next) => {
  const { name, amount, global, shippingType } = req.body

  if (!name && !amount && !global && !shippingType) {
    res.status(404).json({ message: 'Debe ingresar todos los campos requeridos' })
  } else {
    try {
      const newShipping = await Shipping.create(req.body)
      return newShipping
        ? res.status(200).json({ message: 'orden creada exitosaente', newShipping })
        : res.status(404).json({ mesage: 'ha ocurrido un problema' })
    } catch (error) {
      return next(error)
    }
  }
}
