import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import models from '../models/index.js';

config();

const { DBNAME, DBUSERNAME, DBPASS, DBHOST, DBPORT, DBDIALECT } = process.env;


//  config de sequelize
const sequelize = new Sequelize(
    DBNAME,
    DBUSERNAME,
    DBPASS,
    {
      host: DBHOST,
      port: DBPORT,
      dialect: DBDIALECT,
      logging: false
    }
  )

  // capitalizamos las iniciales de los modelos y le injectemos sequelize
  const loadedModels = {}
  Object.entries(models).forEach(([modelName, modelDefinition]) => {
    loadedModels[modelName] = modelDefinition(sequelize)
  })

  //relaciones
  loadedModels.UserModel.hasMany(loadedModels.ShopModel)
  loadedModels.ShopModel.belongsTo(loadedModels.UserModel)

  loadedModels.UserModel.hasMany(loadedModels.ProductModel)
  loadedModels.ProductModel.belongsTo(loadedModels.UserModel)



export {
     sequelize,
     loadedModels
}