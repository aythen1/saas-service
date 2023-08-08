import { Order } from '../../database/connection/connectionDB.js'

export const deleteOrder = async (req, res, next) => {
  const { id } = req.params
  const order = await Order.findByPk(id)

  if (!order) {
    return res.status(404).send(`The orderId: ${id} doesn't exist`)
  }

  try {
    await Order.update({ isDisable: true }, { where: id })
    return res.send(`The orderId: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
