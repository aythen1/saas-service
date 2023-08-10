import { Tag } from '../../database/connection/connectionDB.js'

export const addTag = async (req, res, next) => {
  const { image, name, details, icon } = req.body

  try {
    if (!image && !name && !details && !icon) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newTag = await Tag.create(req.body)
      return res
        .status(201)
        .json({ message: 'tag creado correctamente ', newTag })
    }
  } catch (error) {
    return next(error)
  }
}
