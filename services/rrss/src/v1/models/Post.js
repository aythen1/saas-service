import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Post', {
    photo: {
      type: DataTypes.STRING
    },
    video: {
      type: DataTypes.STRING
    },
    link: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING
    },
    caption: {
      type: DataTypes.STRING
    }
  })
}
