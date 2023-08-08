import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Banner', {
    tittle: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    gallery: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  })
}
