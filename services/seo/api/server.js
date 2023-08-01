import * as dotenv from "dotenv";
import express from "express";
import app from "./app.js";
dotenv.config();

const {PORT} = process.env;
const server = express();

server.use(app)

server.listen(PORT||3001 , ()=>{
    console.log(`Server on port: ${PORT||3001}`)
});