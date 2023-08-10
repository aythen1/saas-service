import { Banner } from '../../database/connection/connectionDB.js'

export const addBanner = async (req, res, next) => {
  const { tittle, description, gallery } = req.body

  try {
    if (!tittle && !description && !gallery) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newBanner = await Banner.create(req.body)
      return res
        .status(201)
        .json({ message: 'banner creado correctamente ', newBanner })
    }
  } catch (error) {
    return next(error)
  }
}
