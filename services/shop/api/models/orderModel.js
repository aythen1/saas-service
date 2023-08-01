import { DataTypes } from 'sequelize';

export default (sequelize) =>{
    sequelize.define('Order',{
        truckingNumber:{
            type: DataTypes.NUMBER,
            allowNull:false
        },
        fee: {
            type: DataTypes.NUMBER,
            allowNull:false
        },
        total:{
            type: DataTypes.NUMBER,
            allowNull:false
        },
        date:{
            type: DataTypes.DATE,
            allowNull:false
        },
        status: {
            type: DataTypes.ENUM,
            allowNull:false
        },
        adress: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });
}