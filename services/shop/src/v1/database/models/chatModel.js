import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Message', {
    Message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
