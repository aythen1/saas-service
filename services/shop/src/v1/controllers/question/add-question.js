import { Question } from '../../database/connection/connectionDB.js'

export const addQuestion = async (req, res, next) => {
  const { name, image, quote } = req.body

  try {
    if (!name && !image && !quote) {
      throw new Error('Debe ingresar todos los campos requeridos')
    } else {
      const newQuestion = await Question.create(req.body)
      return res
        .status(201)
        .json({ message: 'question creado correctamente ', newQuestion })
    }
  } catch (error) {
    return next(error)
  }
}
