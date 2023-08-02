import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Status", {
    visitors: {
      type: DataTypes.STRING,
    },
    pageVisitors: {
      type: DataTypes.STRING,
    },
  });
};
