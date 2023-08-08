import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    details: {
      type: DataTypes.STRING
    },
    icon: {
      type: DataTypes.STRING
    }
  })
}
