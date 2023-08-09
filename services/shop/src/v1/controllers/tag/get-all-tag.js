import { Tag } from '../../database/connection/connectionDB.js'

export const getAllTag = async (req, res, next) => {
  try {
    const tag = await Tag.findAll()
    if (!tag) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'tag found', Tag })
  } catch (error) {
    return next(error)
  }
}
