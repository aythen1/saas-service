import { Router } from "express";
import swagger from "./swagger.js";
import {passport, isAuthenticated,login } from "../services/authPassport.js";

//files imported
import routerUser from "./user.js";
import logInOut from "./loginLogout.js";

const index = Router();

index.use("/", swagger);

index.use(logInOut)

index.use("/index", routerUser);
index.get('/',(req,res)=>{
    console.log(req.session)
    res.json({user:req.session})
})

export default index;
