import { Product, Shop } from '../../database/connection/connectionDB.js'

export const getProductsOfShop = async (req, res, next) => {
  const { shopId } = req.params

  try {
    const shop = await Shop.findByPk(shopId, { include: Product })

    if (!shop) {
      return res.status(200).json({ message: 'no hay productos asociados a ese shop' })
    } else {
      const allProducts = shop.Products.map(e => {
        return {
          name: e.name,
          featuredImage: e.featured,
          gallery: e.gallery,
          unit: e.unit,
          price: e.price,
          salePrice: e.salePrice,
          sku: e.sku,
          width: e.width,
          height: e.height,
          length: e.length,
          type: e.type,
          quantity: e.quantity,
          status: e.status,
          CategoryId: e.CategoryId,
          GroupId: e.GroupId
        }
      })
      return res.status(200).json({ message: 'productos localizados', allProducts })
    }
  } catch (error) {
    return next(error)
  }
}
