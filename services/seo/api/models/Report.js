import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Report", {
    result: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
    },
  });
};
