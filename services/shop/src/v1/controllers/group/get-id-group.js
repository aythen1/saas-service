import { Group } from '../../database/connection/connectionDB.js'

export const getGroupByPk = async (req, res) => {
  const { id } = req.params

  try {
    const group = await Group.findByPk(id)
    if (!group) {
      return res.status(404).send(`The groupId: ${id} doesn't exist`)
    }
    return res.status(200).json({message:'group found', group})
  } catch (error) {
    return res.status(404).send(error.message)
  }
}