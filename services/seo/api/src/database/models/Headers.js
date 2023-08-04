import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Headers", {
    h1: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    h2: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    h3: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    h4: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
};
