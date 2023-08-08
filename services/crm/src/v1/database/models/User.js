import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('User', {
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    street: {
      type: DataTypes.STRING
    },
    streetNumber: {
      type: DataTypes.STRING
    },
    zipCode: {
      type: DataTypes.STRING
    },
    avatar: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    web: {
      type: DataTypes.STRING
    },
    language: {
      type: DataTypes.STRING
    },
    rol: {
      type: DataTypes.ENUM('reseller', 'ambassador', 'user')
    }
  })
}
