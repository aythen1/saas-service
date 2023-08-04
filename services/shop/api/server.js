import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import app from "./app.js";
import { sequelize, loadedModels } from './database/connection/connectionDB.js';

const {PORT} = process.env;
const server = express();

server.use(app)


sequelize.sync({force : true})
.then(() => {
    console.log('base de datos cargada correctamente')
    server.listen(PORT||4009 , ()=>{
        console.log(`Server on port: ${PORT||4009}`)
    });

})
.catch((err) => {
    console.log(err)
})

