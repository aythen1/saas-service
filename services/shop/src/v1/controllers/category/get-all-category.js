import { Category } from '../../database/connection/connectionDB.js'

export const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    if (!categories) {
      return res.status(404).send('doesn\'t exists')
    }
    return res.status(200).json({ message: 'categories found', categories })
  } catch (error) {
    return next(error)
  }
}
