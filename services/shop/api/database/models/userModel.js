import { DataTypes } from 'sequelize';

export default (sequelize) =>{
   return sequelize.define('User',{
        name:{
            type: DataTypes.STRING,
            // allowNull:false
        },
        email:{
            type: DataTypes.STRING,
             allowNull:false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        avatar:{
            type: DataTypes.STRING,
            allowNull:true
        }
    });
}