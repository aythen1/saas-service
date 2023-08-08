import { Author } from '../../database/connection/connectionDB.js'

export const addAuthor = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newAuthor = await Author.create(req.body)
      return res
        .status(201)
        .json({ message: 'Author creado correctamente ', newAuthor })
    }
  } catch (error) {
    return next(error)
  }
}
