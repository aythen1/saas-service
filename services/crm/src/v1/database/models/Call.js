import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Call', {
    name_transmitter: {
      type: DataTypes.STRING()
    },
    name_receiver: {
      type: DataTypes.STRING()
    },
    duration: {
      type: DataTypes.INTEGER()
    },
    date: {
      type: DataTypes.DATE()
    },
    stars: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5')
    }
  })
}
