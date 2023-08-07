import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
import { models } from '../models/index.js'

dotenv.config()

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } =
  process.env

export const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: false
})

models.forEach((model) => model(db))

export const {
  Headers,
  Miscellaneous,
  Performance,
  Security,
  Seo,
  User,
  Website
} = db.models

User.hasMany(Website)
Website.belongsTo(User)

Website.hasMany(Seo)
Seo.belongsTo(Website)

Website.hasMany(Performance)
Performance.belongsTo(Website)

Website.hasMany(Security)
Security.belongsTo(Website)

Website.hasMany(Miscellaneous)
Miscellaneous.belongsTo(Website)

Seo.hasOne(Headers)
Headers.belongsTo(Seo)
