import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Manufacturers', {
    logo: {
      type: DataTypes.STRING
    },
    coverImage: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  })
}
