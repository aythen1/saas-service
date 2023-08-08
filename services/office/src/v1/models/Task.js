import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Task', {
    name: {
      type: DataTypes.STRING
    },
    estimatedHours: {
      type: DataTypes.INTEGER
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high')
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.ENUM('toDo', 'inProgress', 'review', 'done')
    }
  })
}
