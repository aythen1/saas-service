import { Shop } from '../../database/connection/connectionDB.js'

export const deleteShop = async (req, res, next) => {
  const { id } = req.params
  const shop = await Shop.findByPk(id)

  if (!shop) {
    return res.status(404).send(`The shopId: ${id} doesn't exist`)
  }

  try {
    await Shop.update({ isDisable: true }, { where: { id } })
    return res.send(`The shopId: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
