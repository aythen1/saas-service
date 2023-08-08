import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Event', {
    name: {
      type: DataTypes.STRING()
    },
    date: {
      type: DataTypes.DATE()
    }
  })
}
