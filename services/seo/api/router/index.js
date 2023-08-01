import { Router } from "express";
import routerUser from "./user.js";
import swagger from "./swagger.js";

const index = Router();

index.use("/", swagger);
index.use("/index", routerUser);

export default index;
