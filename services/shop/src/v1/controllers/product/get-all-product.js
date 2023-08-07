import { Product, Shop } from "../../database/connection/connectionDB.js"


export const productsFindAll = async (req, res, next) => {
    const { shopId } = req.params

    const allProducts = await Product.findAll({  include: Shop })

    const allProducts2 = allProducts.map(e =>  {
      return {
        id: e.id,
        name: e.name,
        gallery: e.gallery,
        shops: e.Shops.map(i=> {
          return {
            id: i.id,
            name: i.name,
            UserId: i.UserId
          }
        })
      }
    })

    const productsByShopId = allProducts2.filter(e => {
      return e.shops.find(shop => {
        return parseInt(shop.id) === parseInt(shopId)
      })
    })


    return productsByShopId
      ? res.status(200).json({ message: 'productos localizados', productsByShopId })
      : res.status(200).json({ message: 'no hay productos asociados a ese shop' })
  }