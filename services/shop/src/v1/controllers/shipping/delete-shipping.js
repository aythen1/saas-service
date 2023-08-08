import { Shipping } from '../../database/connection/connectionDB.js'

export const deleteShipping = async (req, res, next) => {
  const { id } = req.params
  const shipping = await Shipping.findByPk(id)

  if (!shipping) {
    return res.status(404).send(`The shippingId: ${id} doesn't exist`)
  }

  try {
    await Shipping.update({ isDisable: true }, { where: id })
    return res.send(`The shippingId: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
