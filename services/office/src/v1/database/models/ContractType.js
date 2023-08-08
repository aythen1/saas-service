import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('ContractType', {
    lightLogo: {
      type: DataTypes.STRING
    },
    darkLogo: {
      type: DataTypes.STRING
    },
    invoiceFooterTitle: {
      type: DataTypes.STRING
    },
    invoiceFooterNote: {
      type: DataTypes.STRING
    }
  })
}
