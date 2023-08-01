import { DataTypes } from 'sequelize';

export default (sequelize) =>{
    sequelize.define('Taxes',{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        rate:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        country:{
            type: DataTypes.STRING,
            allowNull:false
        },
        city:{
            type: DataTypes.STRING,
            allowNull:false
        },
        state:{ // Taxes from Country / City / State 
            type: DataTypes.STRING,
            allowNull:false
        },
        zip:{
            type: DataTypes.STRING,
            allowNull:false
        },
    });
}