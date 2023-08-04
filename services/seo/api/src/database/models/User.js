import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        isEven(value) {
          if (value.length < 8) {
            throw new Error("Min length is 8");
          }
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        min: 3,
      },
    },
    timezone: {
      type: DataTypes.DATE,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    apiKey: {
      type: DataTypes.STRING,
    },
  });
};
