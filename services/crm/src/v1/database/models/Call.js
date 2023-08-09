import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Call', {
    nameTransmitter: {
      type: DataTypes.STRING()
    },
    nameReceiver: {
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
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
