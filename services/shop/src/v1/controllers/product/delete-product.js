import { Product } from '../../database/connection/connectionDB.js'

export const deleteProduct = async (req, res) => {
  const { id } = req.params
  const product = await Product.findByPk(id)

  if (!product) {
    return res.status(404).send(`The productId: ${id} doesn't exist`)
  }

  try {
    await Product.update({ isDisable: true }, { where: { id } })
    return res.send(`The productId: ${id} was succesful deleted`)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}