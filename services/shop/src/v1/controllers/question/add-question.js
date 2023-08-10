import { Question } from '../../database/connection/connectionDB.js'

export const addQuestion = async (req, res, next) => {
  const { image, message, date } = req.body

  try {
    if (!image && !message && !date) {
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
