import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Review', {
    message: {
      type: DataTypes.STRING,
        allowNull:false
    },
    rating: {
      type: DataTypes.ENUM('1','2','3','4','5')
    },
    date: {
      type: DataTypes.DATE
      // allowNull:false
    },
  })
}