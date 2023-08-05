import { DataTypes } from 'sequelize';

export default (sequelize) =>{
   return sequelize.define('Shipping',{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        global:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
        shippingType: {
            type:DataTypes.ENUM('free','fixed','percentage'),
            allowNull:false
        }
    });
}