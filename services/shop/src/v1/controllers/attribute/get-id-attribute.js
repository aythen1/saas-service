import { Attribute } from '../../database/connection/connectionDB.js'

export const getAttributeById = async (req, res, next) => {
  const { id } = req.params
  try {
    const attribute = await Attribute.findByPk(id)
    if (!attribute) {
      return res.status(404).send(`The answerId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'answer found', attribute })
  } catch (error) {
    return next(error)
  }
}
