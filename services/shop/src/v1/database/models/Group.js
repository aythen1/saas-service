/* eslint-disable no-dupe-keys */
import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Group', {
    name: {
      type: DataTypes.STRING
    },
    icon: {
      type: DataTypes.STRING
    },
    layout: {
      type: DataTypes.ENUM('classic', 'compact', 'minimal', 'modern', 'standard')
    },
    productCard: {
      type: DataTypes.ENUM('helium', 'neon', 'argon', 'kypton', 'xenon', 'radon')
    },
    promotionalSlide: {
      type: DataTypes.STRING
    },
    icon: {
      type: DataTypes.STRING
      // allowNull: false
    },
    layout: {
      type: DataTypes.ENUM('classic', 'comapct', 'minimal', 'modern', 'standard')
      // allowNull: false
    },
    productCard: {
      type: DataTypes.ENUM('hellum', 'neon', 'argon', 'kypton', 'xenon', 'radon')
      //  allowNull: false
    },
    promotionalSlider: {
      type: DataTypes.STRING
      // allowNull: false
    }
  })
}
