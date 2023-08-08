import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('ZoomMeeting', {
    title: {
      type: DataTypes.STRING
    },
    startDate: {
      type: DataTypes.DATE
    },
    duration: {
      type: DataTypes.INTEGER
    },
    password: {
      type: DataTypes.STRING
    }
  })
}
