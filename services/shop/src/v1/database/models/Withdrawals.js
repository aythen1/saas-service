import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Withdrawals', {
    amount: {
      type: DataTypes.INTEGER
    },
    licenseNumber: {
      type: DataTypes.ENUM('draft', 'inProgress', 'complete')
    }
  })
}
