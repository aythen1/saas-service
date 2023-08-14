import { Order } from '../../database/connection/connectionDB.js'

export const addOrder = async (req, res, next) => {
  const { truckingNumber, fee, total, date, status, address, products } = req.body
  const { userId } = req.params

  if (!truckingNumber && !fee && !total && !date && !status && !address && !products) {
    res.status(404).json({ message: 'Debe ingresar todos los campos requeridos' })
  } else {
    try {
      const data = { ...req.body, userId }
      const newOrder = await Order.create(data)
      return newOrder
        ? res.status(200).json({ message: 'orden creada exitosaente', newOrder })
        : res.status(404).json({ mesage: 'ha ocurrido un problema' })
    } catch (error) {
      return next(error)
    }
  }
}
