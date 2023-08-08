import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Invoices', {
    name: {
      type: DataTypes.STRING
    },
    dueDate: {
      type: DataTypes.DATE
    },
    tax: {
      type: DataTypes.ENUM('iva', 'wcrf')
    },
    client: {
      type: DataTypes.STRING
    }
  })
}
