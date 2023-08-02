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
    headers: {
      type: DataTypes.ENUM("h1", "h1", "h3", "h4"),
    },
    contentKeywords: {
      type: DataTypes.STRING,
    },
    imageKeywords: {
      type: DataTypes.STRING,
    },
    friendlySeoUrl: {
      type: DataTypes.STRING,
    },
    page404: {
      type: DataTypes.STRING,
    },
    robotsTxt: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    noindex: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    linksOnPage: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    favicon: {
      type: DataTypes.STRING,
    },
  });
};
