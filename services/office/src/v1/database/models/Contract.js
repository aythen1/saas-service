import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Contract', {
    subject: {
      type: DataTypes.STRING
    },
    hours: {
      type: DataTypes.INTEGER
    },
    value: {
      type: DataTypes.INTEGER
    },
    priceRate: {
      type: DataTypes.INTEGER
    },
    priceFix: {
      type: DataTypes.INTEGER
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.STRING
    }
  })
}
