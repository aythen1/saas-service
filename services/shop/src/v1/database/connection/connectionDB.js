import { config } from 'dotenv'
import { Sequelize } from 'sequelize'
import { models } from '../models/index.js'

config()

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env

//  config de sequelize
export const db = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: false
  }
)

// injectamos sequelize en todos los modelos
models.forEach((model) => model(db))

export const {
  User,
  Shop,
  Product,
  Sell,
  Order,
  Shipping,
  Chat,
  Taxes,
  Answer,
  Attribute,
  Author,
  Banner,
  Category,
  Coupon,
  Group,
  Manufacturers,
  Question,
  SocialMedia,
  Tag,
  Withdrawals
} = db.models

// relaciones
Shop.belongsTo(User)
User.hasMany(Shop)

// relacion muchos a muchos
Shop.belongsToMany(Product, { through: 'Shop_Product' })
Product.belongsToMany(Shop, { through: 'Shop_Product' })

User.hasMany(Product)
Product.belongsTo(User)
