import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('SocialMedia', {
    name: {
      type: DataTypes.STRING
    }
  })
}
