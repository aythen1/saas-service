import { Delivery } from '../../database/connection/connectionDB.js'

export const addDelivery = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newDelivery = await Delivery.create(req.body)
      return res
        .status(201)
        .json({ message: 'delivery creado correctamente ', newDelivery })
    }
  } catch (error) {
    return next(error)
  }
}
