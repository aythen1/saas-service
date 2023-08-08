import { Order } from '../../database/connection/connectionDB.js'

export const getOrderByPk = async (req, res, next) => {
  const { id } = req.params

  try {
    const order = await Order.findByPk(id)
    if (!order) {
      return res.status(404).send(`The orderId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'order found', order })
  } catch (error) {
    return next(error)
  }
}
