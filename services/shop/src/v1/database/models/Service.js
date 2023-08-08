import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Service', {
    name: {
      type: DataTypes.STRING,
        allowNull:false
    },
    licenseNumber: {
      type: DataTypes.INTEGER
    },
    phone: {
      type: DataTypes.STRING
      // allowNull:false
    },
    // ubication: {
    //   type: DataTypes.STRING
    // },
    image: {
      type: DataTypes.STRING
    },
    gallery: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
  })
}