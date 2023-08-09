import { Delivery } from '../../database/connection/connectionDB.js'

export const getAllDelivery = async (req, res, next) => {
  try {
    const delivery = await Delivery.findAll()
    if (!delivery) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'delivery found', delivery })
  } catch (error) {
    return next(error)
  }
}
