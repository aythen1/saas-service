import { DataTypes } from 'sequelize';

export default (sequelize) =>{
    sequelize.define('Shop',{
        logo:{
            type: DataTypes.STRING,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
        // owner,
        // products,
        // orders
    });
}