import { DataTypes } from 'sequelize';

export default (sequelize) =>{
   return sequelize.define('Product',{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull:false
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        active:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
}