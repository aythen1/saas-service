import { Product } from '../../database/connection/connectionDB.js'

export const createProduct = async (req, res, next) => {
  const { name, gallery, CategoryId, GroupId, shops } = req.body
  const data = { name, gallery, CategoryId, GroupId }

  try {
    const newProduct = await Product.create(data)
    const response = await newProduct.addShop(shops)
    return response
      ? res.status(200).json({ message: 'producto creado correctamente', productCreated: response })
      : res.status(404).json({ message: 'ha ocurrido un error' })
  } catch (error) {
    return next(error)
  }
}
