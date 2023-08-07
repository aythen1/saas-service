import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('User', {
    email: {
      type: DataTypes.STRING
      // allowNull: false
    },
    password: {
      type: DataTypes.STRING
      // allowNull: false
    },
    name: {
      type: DataTypes.STRING
      // allowNull: false
    },
    bithday: {
      type: DataTypes.DATE
      // allowNull: false
    },
    gender: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    apiKey: {
      type: DataTypes.STRING
    },
    startingWork: {
      type: DataTypes.DATE
    },
    endingWork: {
      type: DataTypes.DATE
    },
    rol: {
      type: DataTypes.ENUM('user', 'freelancer', 'provider')
    }
  })
}
