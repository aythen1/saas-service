import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Experience', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    }
  })
}
