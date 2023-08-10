import { Taxes } from '../../database/connection/connectionDB.js'

export const addTaxes = async (req, res, next) => {
  const { name, rate, country, city, state, zip } = req.body

  try {
    if (!name && !rate && !country && !city && !state && !zip) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newTaxes = await Taxes.create(req.body)
      return res
        .status(201)
        .json({ message: 'taxes creado correctamente ', newTaxes })
    }
  } catch (error) {
    return next(error)
  }
}
