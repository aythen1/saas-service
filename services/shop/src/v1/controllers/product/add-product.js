import { Product } from '../../database/connection/connectionDB.js'



export const createProduct = async (req, res, next) => {
  const { shops } = req.body


  const newProduct = await Product.create(req.body)
  

  const response = await newProduct.addShop(shops)
  return response ? res.status(200).json({ message: 'producto creado correctamente', productCreated: response }) :
         res.status(404).json({ message: 'ha ocurrido un error' })
}
