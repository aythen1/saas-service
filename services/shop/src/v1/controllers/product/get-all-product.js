import { Product } from "../../database/connection/connectionDB.js"


export const productsFindAll = async (req, res, next) => {
    const { shopId } = req.params
    const productsByShopId = await Product.findAll({ where: { ShopId: shopId } })
    console.log(productsByShopId, ' q trae?')

    return productsByShopId
      ? res.status(200).json({ message: 'productos localizados', productsByShopId })
      : res.status(200).json({ message: 'no hay productos asociados a ese shop' })
  }