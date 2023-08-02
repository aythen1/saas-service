import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Url", {
    name: {
      type: DataTypes.STRING,
    },
  });
};
