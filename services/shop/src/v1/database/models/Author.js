import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Author', {
    image: {
      type: DataTypes.STRING
    },
    coverImage: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    languages: {
      type: DataTypes.STRING
    },
    biographi: {
      type: DataTypes.STRING
    },
    quote: {
      type: DataTypes.STRING
    },
    born: {
      type: DataTypes.DATE
    },
    death: {
      type: DataTypes.DATE
    },
    coverImage: {
      type: DataTypes.STRING
      // allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    languages: {
      type: DataTypes.STRING
      // allowNull: false
    },
    biographi: {
      type: DataTypes.STRING
      // allowNull: false
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: false
    },
    born: {
      type: DataTypes.DATE
      // allowNull: false
    },
    death: {
      type: DataTypes.DATE
      // allowNull: false
    }
  })
}
