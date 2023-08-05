import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Shop', {
    logo: {
      type: DataTypes.STRING
      // allowNull:false
    },
    coverImage: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
      // allowNull:false
    },
    ubication: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    accountHolderName: {
      type: DataTypes.STRING
    },
    accountHolderEmail: {
      type: DataTypes.STRING
    },
    bankName: {
      type: DataTypes.STRING
    },
    accountNumber: {
      type: DataTypes.INTEGER
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    streetAddress: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    contactNumber: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    schedule: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
    // owner,
    // orders,
    // users,
    // products,
  })
}
