import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Miscellaneou', {
    structuredData: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    metaViewport: {
      type: DataTypes.STRING
    },
    characterSet: {
      type: DataTypes.STRING
    },
    sitemap: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    social: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    contentLength: {
      type: DataTypes.STRING
    },
    textToHtmlRatio: {
      type: DataTypes.FLOAT
    },
    inlineCss: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    deprecatedHtml: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
