import { Answer } from '../../database/connection/connectionDB.js'

export const getAllAnswer = async (req, res, next) => {
  try {
    const answer = await Answer.findAll()
    if (!answer) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'answer found', answer })
  } catch (error) {
    return next(error)
  }
}
