import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Question', {
    image: {
      type: DataTypes.STRING
    },
    message: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    }
  })
}
