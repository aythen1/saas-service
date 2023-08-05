import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
import { models } from '../models/index.js'

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env

export const db = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`,
  {
    logging: false,
    native: false
  }
)

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
