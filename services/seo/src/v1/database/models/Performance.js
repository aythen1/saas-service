import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Performance', {
    textCompression: {
      type: DataTypes.FLOAT
    },
    loadTime: {
      type: DataTypes.FLOAT
    },
    pageSize: {
      type: DataTypes.FLOAT
    },
    httpRequestJs: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    httpRequestCss: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    httpRequestImages: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    imageFormatAvif: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    imageFormatWebP: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    imageFormatOther: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    javascriptDefer: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    domSize: {
      type: DataTypes.FLOAT
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
