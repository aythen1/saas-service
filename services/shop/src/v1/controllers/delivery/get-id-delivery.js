import { Delivery } from '../../database/connection/connectionDB.js'

export const getDeliveryById = async (req, res, next) => {
  const { id } = req.params
  try {
    const delivery = await Delivery.findByPk(id)
    if (!delivery) {
      return res.status(404).send(`The DeliveryId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'delivery found', delivery })
  } catch (error) {
    return next(error)
  }
}
