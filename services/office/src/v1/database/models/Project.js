import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Project', {
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
    },
    estimatedHours: {
      type: DataTypes.INTEGER
    },
    budget: {
      type: DataTypes.INTEGER
    },
    currencySymbol: {
      type: DataTypes.INTEGER
    }
  })
}
