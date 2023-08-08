import { Category } from '../../database/connection/connectionDB.js'

export const addCategory = async (req, res, next) => {
  const { name } = req.body

  if (!name) {
    res.status(404).json({ message: 'name is missing' })
  } else {
    try {
      const newCategory = await Category.create(req.body)
      return newCategory
        ? res
          .status(200)
          .json({ message: 'grupo creado exitosaente', newCategory })
        : res.status(404).json({ mesage: 'ha ocurrido un problema' })
    } catch (error) {
      return next(error)
    }
  }
}
