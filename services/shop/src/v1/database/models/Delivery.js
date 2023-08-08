import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Delivery', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // licenseNumber: {
    //   type: DataTypes.INTEGER
    // },
    // phone: {
    //   type: DataTypes.STRING,
    //    allowNull:false
    // },
    // image: {
    //   type: DataTypes.STRING
    // },
    // gallery: {
    //   type: DataTypes.ARRAY(DataTypes.STRING)
    // },
  })
}
