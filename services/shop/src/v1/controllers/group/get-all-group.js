import { Group } from '../../database/connection/connectionDB.js'

export const getAllGroups = async (req, res, next) => {
  try {
    const groups = await Group.findAll()
    if (!groups) {
      return res.status(404).send('doesn\'t exists')
    }
    return res.status(200).json({ message: 'group found', groups })
  } catch (error) {
    return next(error)
  }
}
