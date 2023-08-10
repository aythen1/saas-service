import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Website', {
    domain: {
      type: DataTypes.STRING,
      allowNull: false
    },
    privacy: {
      type: DataTypes.ENUM('private', 'public', 'password')
    },
    password: {
      type: DataTypes.STRING
    },
    notification: {
      type: DataTypes.BOOLEAN
    },
    ips: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    url: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    bots: {
      type: DataTypes.BOOLEAN
    },
    script: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    referrers: {
      type: DataTypes.INTEGER
    },
    countries: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    browsers: {
      type: DataTypes.STRING
    },
    operatingSystems: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    events: {
      type: DataTypes.STRING
    },
    visitors: {
      type: DataTypes.INTEGER
    },
    pageViews: {
      type: DataTypes.INTEGER
    },
    createdByUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isDisable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
