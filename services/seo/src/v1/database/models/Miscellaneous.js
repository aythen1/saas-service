import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Miscellaneous', {
    structuredData: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    metaViewport: {
      type: DataTypes.STRING
    },
    characterSet: {
      type: DataTypes.STRING
    },
    sitemap: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    social: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    contentLength: {
      type: DataTypes.STRING
    },
    textToHtmlRatio: {
      type: DataTypes.FLOAT
    },
    inlineCss: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    deprecatedHtml: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
