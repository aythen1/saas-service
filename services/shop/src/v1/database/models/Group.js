import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING,
     // allowNull: false
    },
    layout: {
      type: DataTypes.ENUM('classic', 'comapct', 'minimal', 'modern', 'standard'),
     // allowNull: false
    },
    productCard: {
      type: DataTypes.ENUM('hellum', 'neon', 'argon', 'kypton', 'xenon', 'radon')
    //  allowNull: false
    },
    promotionalSlider: {
      type: DataTypes.STRING,
     // allowNull: false
    },
  })
}