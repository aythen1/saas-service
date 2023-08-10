import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Security', {
    httpsEncryption: {
      type: DataTypes.BOOLEAN
    },
    mixedContent: {
      type: DataTypes.BOOLEAN
    },
    serverSignature: {
      type: DataTypes.STRING
    },
    unsafeCORS: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    plaintextEmail: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
