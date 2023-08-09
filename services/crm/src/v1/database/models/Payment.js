import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Payment', {
    name: {
      type: DataTypes.STRING()
    },
    status: {
      type: DataTypes.ENUM('pendiente', 'aceptado')
    },
    total: {
      type: DataTypes.INTEGER
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
