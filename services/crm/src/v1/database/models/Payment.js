import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Payment', {
    name: {
      type: DataTypes.STRING()
    }
  })
}
