import { Group } from '../../database/connection/connectionDB.js'

export const deleteGroup = async (req, res, next) => {
  const { id } = req.params
  const group = await Group.findByPk(id)

  if (!group) {
    return res.status(404).send(`The groupId: ${id} doesn't exist`)
  }

  try {
    await Group.update({ isDisable: true }, { where: id })
    return res.send(`The groupId: ${id} was succesful deleted`)
  } catch (error) {
    return next(error)
  }
}
