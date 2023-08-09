import { Taxes } from '../../database/connection/connectionDB.js'

export const deleteTaxes = async (req, res, next) => {
  const { id } = req.params
  const taxes = await Taxes.findByPk(id)

  if (!taxes) {
    return res.status(404).send(`The taxesID: ${id} doesn't exist`)
  }

  try {
    console.log('updated')
    const updated = await Taxes.update({ isDisable: true }, { where: { id } })
    console.log(updated)
    return res.send(`The taxesID: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
