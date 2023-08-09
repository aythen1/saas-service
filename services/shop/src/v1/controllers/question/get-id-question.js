import { Question } from '../../database/connection/connectionDB.js'

export const getQuestionById = async (req, res, next) => {
  const { id } = req.params
  try {
    const question = await Question.findByPk(id)
    if (!question) {
      return res.status(404).send(`The questionId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'question found', question })
  } catch (error) {
    return next(error)
  }
}
