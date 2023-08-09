import { Taxes } from '../../database/connection/connectionDB.js'

export const addTaxes = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
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
