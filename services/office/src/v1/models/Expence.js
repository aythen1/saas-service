import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Expence', {
    name: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    },
    amount: {
      type: DataTypes.INTEGER
    },
    task: {
      type: DataTypes.STRING // modificar
    },
    description: {
      type: DataTypes.STRING
    },
    attachment: {
      type: DataTypes.STRING
    }
  })
}
