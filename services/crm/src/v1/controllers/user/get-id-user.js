import { User } from '../../database/connection/connectionDB.js'

export const getUserByPk = async (req, res, next) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).send(`The userId: ${id} doesn't exist`)
    }
    return res.status(200).json(user)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
