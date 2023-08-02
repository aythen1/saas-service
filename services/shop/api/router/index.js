import { Router } from "express";
import routerUser from "./user.js";
import swagger from "./swagger.js";
import {passport, isAuthenticated,login } from "../services/authPassport.js";

const index = Router();

index.use("/", swagger);

index.post('/login', login, (req,res)=>{
    const {email,password} = req.body
    const user = {email, password}
    res.send(user)
})

index.use("/index", routerUser);

export default index;
