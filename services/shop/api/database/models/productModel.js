import { DataTypes } from 'sequelize';

export default (sequelize) =>{
   return sequelize.define('Product',{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        featuredImage:{
            type: DataTypes.STRING,
            //allowNull: true
        },
        gallery:{
            type: DataTypes.STRING,
            allowNull: false
        },
        unit:{
            type: DataTypes.INTEGER,
            //allowNull: false
        },
        price:{
            type: DataTypes.FLOAT,
            //allowNull:false
        },
        salePrice:{
            type: DataTypes.FLOAT,
            //allowNull: false
        },
        sku:{
            type: DataTypes.STRING,
            //allowNull: false
        },
        width:{
            type: DataTypes.INTEGER,
            //allowNull: false
        },
        height:{
            type: DataTypes.INTEGER,
            //allowNull: false
        },
        length:{
            type: DataTypes.INTEGER,
            //allowNull: false
        },
        type:{
            type: DataTypes.ENUM('digital', 'external')
        },
        quantity:{
            type: DataTypes.INTEGER,
            //allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            //allowNull: false
        }
    });
}