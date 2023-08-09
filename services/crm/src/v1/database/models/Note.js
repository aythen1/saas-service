import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Note', {
    name: {
      type: DataTypes.STRING()
    },
    text: {
      type: DataTypes.STRING()
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
