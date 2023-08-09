import { Answer } from '../../database/connection/connectionDB.js'

export const addAnswer = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newAnswer = await Answer.create(req.body)
      return res
        .status(201)
        .json({ message: 'Answer creado correctamente ', newAnswer })
    }
  } catch (error) {
    return next(error)
  }
}
