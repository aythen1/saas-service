import { Answer } from '../../database/connection/connectionDB.js'

export const getAnswerById = async (req, res, next) => {
  const { id } = req.params
  try {
    const answer = await Answer.findByPk(id)
    if (!answer) {
      return res.status(404).send(`The answerId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'answer found', answer })
  } catch (error) {
    return next(error)
  }
}
