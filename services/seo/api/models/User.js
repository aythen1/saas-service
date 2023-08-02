import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3,
      },
    },
    timezone: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
        isAlphanumeric: true,
      },
    },
    avatar: {
      type: DataTypes.STRING,
    },
  });
};
