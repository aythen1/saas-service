import { Shipping } from '../../database/connection/connectionDB.js'

export const getShippingByPk = async (req, res) => {
  const { id } = req.params

  try {
    const shipping = await Shipping.findByPk(id)
    if (!shipping) {
      return res.status(404).send(`The shippingId: ${id} doesn't exist`)
    }
    return res.status(200).json({message:'order found', shipping})
  } catch (error) {
    return res.status(404).send(error.message)
  }
}