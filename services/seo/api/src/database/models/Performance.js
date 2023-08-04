import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Performance", {
    textCompression: {
      type: DataTypes.BOOLEAN,
    },
    loadTime: {
      type: DataTypes.FLOAT,
    },
    pageSize: {
      type: DataTypes.FLOAT,
    },
    httpRequest: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    imageFormat: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    javascriptDefer: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    domSize: {
      type: DataTypes.FLOAT,
    },
  });
};
