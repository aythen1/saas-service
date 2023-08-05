import express from "express";
import * as dotenv from "dotenv";
import app from "./app.js";
import { db } from "./src/database/conection/conectionDB.js";

dotenv.config();

const { PORT } = process.env;
const server = express();

server.use(app);

server.listen(PORT || 4008, () => {
  db.sync({ force: true }).then(() =>
    console.log(`Database Synchronized. Server on port: ${PORT || 4008}`)
  );
});
