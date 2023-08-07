import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
     // allowNull: false
    },
    details: {
      type: DataTypes.STRING,
     // allowNull: false
    },
    icon: {
      type: DataTypes.STRING
    //  allowNull: false
    },
  })
}