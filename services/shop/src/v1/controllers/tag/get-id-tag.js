import { Tag } from '../../database/connection/connectionDB.js'

export const getTagById = async (req, res, next) => {
  const { id } = req.params
  try {
    const tag = await Tag.findByPk(id)
    if (!tag) {
      return res.status(404).send(`The tagId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'Tag found', tag })
  } catch (error) {
    return next(error)
  }
}
