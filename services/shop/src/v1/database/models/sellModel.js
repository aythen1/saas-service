import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Sell', {
    dateTransaction: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
    // VENDEDOR,
    // COMPRADOR
    // products,
    // orders
  })
}
