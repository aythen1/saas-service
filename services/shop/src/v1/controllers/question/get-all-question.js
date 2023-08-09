import { Question } from '../../database/connection/connectionDB.js'

export const getAllQuestion = async (req, res, next) => {
  try {
    const question = await Question.findAll()
    if (!question) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'question found', question })
  } catch (error) {
    return next(error)
  }
}
