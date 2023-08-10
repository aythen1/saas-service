import { Manufacturers } from '../../database/connection/connectionDB.js'

export const addManufacturers = async (req, res, next) => {
  const { logo, convertImage, name, website, description } = req.body

  try {
    if (!logo && !convertImage && !name && !website && description) {
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
