import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('User', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    timezone: {
      type: DataTypes.DATE
    },
    avatar: {
      type: DataTypes.STRING
    }
  })
}
