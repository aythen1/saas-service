import { Sell } from '../../database/connection/connectionDB.js'

export const deleteSell = async (req, res, next) => {
  const { id } = req.params
  const sell = await Sell.findByPk(id)

  if (!sell) {
    return res.status(404).send(`The sellID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Sell.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The sellID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
