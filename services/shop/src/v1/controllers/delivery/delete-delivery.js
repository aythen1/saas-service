import { Delivery } from '../../database/connection/connectionDB.js'

export const deleteDelivery = async (req, res, next) => {
  const { id } = req.params
  const delivery = await Delivery.findByPk(id)

  if (!delivery) {
    return res.status(404).send(`The deliveryID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Delivery.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The deliveryID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
