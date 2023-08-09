import { Call } from '../../database/connection/connectionDB.js'

export const getAllCalls = async (req, res, next) => {
  try {
    const allCalls = await Call.findAll()
    if (!allCalls.length) {
      return res
        .status(404)
        .json({ message: 'There are not calls in database' })
    }
    return res.status(200).json(allCalls)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
