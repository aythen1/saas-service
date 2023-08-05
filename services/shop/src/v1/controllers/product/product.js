import { loadedModels } from '../../database/connection/connectionDB.js'

const { ProductModel } = loadedModels

const createProduct = async (req, res, next) => {
  const {
    image, name, gallery, unit, description, status,
    price, salePrice, quantity, sku, width, height, length, type, shops
  } = req.body

  const shopId = req.params
  console.log(shops, 'q onda los ids?')

  const Product = await loadedModels.ProductModel.create({
    // image,
    name,
    gallery
    // unit,
    // description,
    // status,
    // price,
    // salePrice,
    // quantity,
    // sku,
    // width,
    // height,
    // length,
    // type
  })

  await Product.addShopModels(shops)
  return Product ? res.status(200).json({ message: 'producto creado correctamente', productCreated: Product }) : res.status(404).json({ message: 'ha ocurrido un error' })
}

const productsFindAll = async (req, res, next) => {
  const shopId = req.params

  const productsByShopId = await loadedModels.ProductModel.findAll({ where: { ShopId: shopId } })

  return productsByShopId
    ? res.status(200).json({ message: 'productos localizados', productsByShopId })
    : res.status(200).json({ message: 'no hay productos asociados a ese shop' })
}

export {
  createProduct,
  productsFindAll
}
