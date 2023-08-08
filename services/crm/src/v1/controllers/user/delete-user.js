import { User } from '../../database/connection/connectionDB.js'

export const deleteUser = async (req, res, next) => {
  const { id } = req.params
  const user = await User.findByPk(id)

  if (!user) {
    return res.status(404).send(`The userId: ${id} doesn't exist`)
  }

  try {
    await User.update({ isDisable: true }, { where: { id } })
    return res.send(`The userId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
