import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Performance", {
    textCompression: {
      type: DataTypes.BOOLEAN,
    },
  });
};
