import { Manufacturers } from '../../database/connection/connectionDB.js'

export const addManufacturers = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newManufacturers = await Manufacturers.create(req.body)
      return res
        .status(201)
        .json({ message: 'manufacturers creado correctamente ', newManufacturers })
    }
  } catch (error) {
    return next(error)
  }
}
