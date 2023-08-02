import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Tools", {
    explore: {
      type: DataTypes.STRING,
    },
    developer: {
      type: DataTypes.STRING,
    },
  });
};
