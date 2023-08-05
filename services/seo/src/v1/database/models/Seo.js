import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Seo", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metaDescription: {
      type: DataTypes.STRING,
    },
    contentKeywords: {
      type: DataTypes.STRING,
    },
    imageKeywords: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    friendlySeoUrl: {
      type: DataTypes.STRING,
    },
    page404: {
      type: DataTypes.STRING,
    },
    robotsTxt: {
      type: DataTypes.STRING,
    },
    noindex: {
      type: DataTypes.STRING,
    },
    linksOnPage: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    language: {
      type: DataTypes.STRING,
    },
    favicon: {
      type: DataTypes.STRING,
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};