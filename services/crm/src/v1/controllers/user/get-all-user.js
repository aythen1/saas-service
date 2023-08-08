import { User } from '../../database/connection/connectionDB.js'

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    if (!allUsers.length) {
      return res
        .status(404)
        .json({ message: 'There are not users in database' })
    }
    return res.status(200).json(allUsers)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
