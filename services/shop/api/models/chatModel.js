import { DataTypes } from 'sequelize';

export default (sequelize) =>{
    sequelize.define('Message',{
        Message:{
            type: DataTypes.STRING,
            allowNull:false
        }
    });
}