import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Ips", {
    name: {
      type: DataTypes.STRING,
    },
  });
};
