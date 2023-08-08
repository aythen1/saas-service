import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Speciality', {
    name: {
      type: DataTypes.STRING,
        allowNull:false
    },
  })
}