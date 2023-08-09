import { Attribute } from '../../database/connection/connectionDB.js'

export const getAllAttribute = async (req, res, next) => {
  try {
    const attribute = await Attribute.findAll()
    if (!attribute) {
      return res.status(404).send("doesn't exists")
    }
    return res.status(200).json({ message: 'attribute found', attribute })
  } catch (error) {
    return next(error)
  }
}
