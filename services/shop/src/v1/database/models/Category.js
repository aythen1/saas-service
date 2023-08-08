import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Category', {
    image: {
      type: DataTypes.STRING
    },
    name: {
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
