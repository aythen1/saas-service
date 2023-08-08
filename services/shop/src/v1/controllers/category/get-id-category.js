import { Category } from '../../database/connection/connectionDB.js'

export const getCategoryByPk = async (req, res, next) => {
  const { id } = req.params

  try {
    const category = await Category.findByPk(id)
    if (!category) {
      return res.status(404).send(`The categoryId: ${id} doesn't exist`)
    }
    return res.status(200).json({ message: 'category found', category })
  } catch (error) {
    return next(error)
  }
}
