import { Taxes } from '../../database/connection/connectionDB.js'

export const getAllTaxes = async (req, res, next) => {
  try {
    const taxes = await Taxes.findAll()
    if (!taxes) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'taxes found', taxes })
  } catch (error) {
    return next(error)
  }
}
