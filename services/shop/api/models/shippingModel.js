import { DataTypes } from 'sequelize';

export default (sequelize) =>{
    sequelize.define('Shipping',{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        amount:{
            type:DataTypes.NUMBER,
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