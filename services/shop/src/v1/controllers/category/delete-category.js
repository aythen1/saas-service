import { Category } from '../../database/connection/connectionDB.js'

export const deleteCategory = async (req, res) => {
  const { id } = req.params
  const category = await Category.findByPk(id)

  if (!category) {
    return res.status(404).send(`The categoryId: ${id} doesn't exist`)
  }

  try {
    await Category.update({ isDisable: true }, { where: id })
    return res.send(`The categoryId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}