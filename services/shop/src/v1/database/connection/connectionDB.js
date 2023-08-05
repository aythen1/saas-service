import { config } from 'dotenv'
import { Sequelize } from 'sequelize'
import models from '../models/index.js'

config()

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env

//  config de sequelize
const sequelize = new Sequelize(
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

// capitalizamos las iniciales de los modelos y le injectemos sequelize
const loadedModels = {}
Object.entries(models).forEach(([modelName, modelDefinition]) => {
  loadedModels[modelName] = modelDefinition(sequelize)
})

// relaciones
loadedModels.ShopModel.belongsTo(loadedModels.UserModel)
loadedModels.UserModel.hasMany(loadedModels.ShopModel)

loadedModels.ShopModel.belongsToMany(loadedModels.ProductModel, { through: 'ShopModel_ProductModel' })
loadedModels.ProductModel.belongsTo(loadedModels.ShopModel, { through: 'ShopModel_ProductModel' })

loadedModels.UserModel.hasMany(loadedModels.ProductModel)
loadedModels.ProductModel.belongsTo(loadedModels.UserModel)

export {
  sequelize,
  loadedModels
}
