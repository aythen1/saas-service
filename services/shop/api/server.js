import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import app from "./app.js";

const {PORT} = process.env;
const server = express();

server.use(app)

server.listen(PORT||3001 , ()=>{
    console.log(`Server on port: ${PORT||3001}`)
});