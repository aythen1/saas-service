import { User, Website } from '../../database/connection/connectionDB.js'

export const getUserByPk = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findByPk(id, {
      include: [Website],
      attributes: { exclude: ['password'] }
    })
    if (!user) {
      return res.status(404).send(`The userId: ${id} doesn't exist`)
    }
    return res.status(200).send(user)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
