import * as dotenv from 'dotenv';
import express from "express";
import app from "./src/v1/app.js";
dotenv.config()

const {PORT} = process.env;

const server = express();
server.use(app);


server.listen(PORT || 4007, () => {
    console.log(`Server on port: ${PORT||4007}`)
});