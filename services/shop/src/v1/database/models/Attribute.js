import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Attribute', {
    name: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  })
}
