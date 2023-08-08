import { User } from '../../database/connection/connectionDB.js'

export const updateUser = async (req, res, next) => {
  const { id } = req.params
  const { name, phone, city, street, streetNumber, rol } = req.body
  try {
    const user = await User.findByPk(id)
    if (!user) return res.status(404).send(`The userId: ${id} doesn't exist`)

    const userUpdate = await user.update(
      { name, phone, city, street, streetNumber, rol },
      { where: { id } }
    )
    return res.status(200).json({ message: 'User update', user: userUpdate })
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
