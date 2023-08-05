import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Order', {
    truckingNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('inProgress', 'cart', 'shipping', 'ready'),
      allowNull: false
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
