import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('SocialMedia', {
    name: {
      type: DataTypes.STRING
    },
    logo: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.DATE
    }
  })
}
