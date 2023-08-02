import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Website", {
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    privacy: {
      type: DataTypes.ENUM("private", "public", "password"),
    },
    notification: {
      type: DataTypes.BOOLEAN,
    },
    bots: {
      type: DataTypes.BOOLEAN,
    },
    script: {
      type: DataTypes.STRING,
    },
  });
};
