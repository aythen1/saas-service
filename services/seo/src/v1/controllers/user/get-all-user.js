import { User } from '../../database/connection/connectionDB.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } })
    if (!users.length) {
      return res.status(404).send('There are not users in database')
    }
    return res.status(200).send(users)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
