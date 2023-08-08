import { config } from 'dotenv'
import { Sequelize } from 'sequelize'
import { models } from '../models/index.js'

config()

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } =
  process.env

//  config de sequelize
export const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: false
})

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
  Withdrawals,
  Delivery,
  Service,
  Speciality,
  Review
} = db.models

// relaciones

// relacion uno a uno

Product.belongsTo(Order)
Order.belongsTo(Product)
Product.belongsTo(Shipping)
Shipping.belongsTo(Product)
Shipping.belongsTo(Order)
Order.belongsTo(Shipping)

// relacion uno a muchos

// asociaciones para las tiendas
User.hasMany(Shop)
Shop.belongsTo(User)
Group.hasMany(Product)
Product.belongsTo(Group)
Category.hasMany(Product)
Product.belongsTo(Category)

// asociaciones para los servicios
User.hasMany(Service)
Service.belongsTo(User)
Service.hasMany(Review)
Review.belongsTo(Service)

Author.hasMany(Product)
Product.belongsTo(Author)

Author.hasMany(SocialMedia)
SocialMedia.belongsTo(Author)

// relacion muchos a muchos

Shop.belongsToMany(Product, { through: 'Shop_Product' })
Product.belongsToMany(Shop, { through: 'Shop_Product' })

Service.belongsToMany(Speciality, { through: 'Service_Speciality' })
Speciality.belongsToMany(Service, { through: 'Service_Speciality' })

// User.hasMany(Product)
// Product.belongsTo(User)
