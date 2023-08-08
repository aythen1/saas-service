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
    }
  })
}
