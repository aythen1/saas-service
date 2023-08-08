import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Milestone', {
    title: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM('onHold', 'inProgress', 'complete', 'canceled')
    },
    description: {
      type: DataTypes.STRING
    }
  })
}
