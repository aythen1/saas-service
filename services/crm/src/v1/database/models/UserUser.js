import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('UserUser', {
    status: {
      type: DataTypes.ENUM('provider', 'client')
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high')
    },
    rating: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5')
    }
  })
}
