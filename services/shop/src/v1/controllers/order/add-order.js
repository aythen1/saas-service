import { Order } from '../../database/connection/connectionDB.js'

export const addOrder = async (req, res, next) => {
  const { truckingNumber, fee, total, date, status, address } = req.body

  if (!truckingNumber && !fee && !total && !date && !status && address) {
    res.status(404).json({ message: 'Debe ingresar todos los campos requeridos' })
  } else {
    try {
      const newOrder = await Order.create(req.body)
      return newOrder
        ? res.status(200).json({ message: 'orden creada exitosaente', newOrder })
        : res.status(404).json({ mesage: 'ha ocurrido un problema' })
    } catch (error) {
      return next(error)
    }
  }
}
