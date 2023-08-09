import { Tag } from '../../database/connection/connectionDB.js'

export const addTag = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
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
