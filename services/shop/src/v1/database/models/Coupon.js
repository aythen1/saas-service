import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Coupon', {
    image: {
      type: DataTypes.STRING
    },
    code: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.INTEGER
    },
    activeFrom: {
      type: DataTypes.DATE
    },
    willExpire: {
      type: DataTypes.DATE
    }
  })
}
