import { Product, Order } from '../../database/connection/connectionDB.js'

export const getProductsOfOrder = async (req, res, next) => {
  const { orderId } = req.params

  try {
    const order = await Order.findByPk(orderId, { include: Product })

    if (!order) {
      return res.status(200).json({ message: 'no hay productos asociados a esa orden' })
    } else {
      const allProducts = order.Products.map(e => {
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
