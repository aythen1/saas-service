import { User } from '../../database/conection/conectionDB.js'

export const getUserByPk = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).send(`The userId: ${id} doesn't exist`)
    }
    return user
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
