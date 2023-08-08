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
    }
  })
}
