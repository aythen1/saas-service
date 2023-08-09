import { Taxes } from '../../database/connection/connectionDB.js'

export const getTaxesById = async (req, res, next) => {
  const { id } = req.params
  try {
    const taxes = await Taxes.findByPk(id)
    if (!taxes) {
      return res.status(404).send(`The taxesId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'Taxes found', taxes })
  } catch (error) {
    return next(error)
  }
}
