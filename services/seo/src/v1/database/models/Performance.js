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
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    httpRequestCss: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    httpRequestImages: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    imageFormatAvif: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    imageFormatWebP: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    imageFormatOther: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    javascriptDefer: {
      type: DataTypes.ARRAY(DataTypes.STRING)
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
