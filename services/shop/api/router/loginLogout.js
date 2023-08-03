import { Router } from "express";
import {passport, isAuthenticated,login } from "../services/authPassport.js";

const logInOut = Router();

logInOut.post('/login', login, (req,res)=>{
    const {email,password} = req.body
    const user = {email, password}
    res.send(user)
});

logInOut.post('/logout', (req, res) => {
    req.session.destroy(function (err) {
        console.log(err)
        if(err) res.json({message:'Ocurrio un problema al cerrar sesion',err:err})
        res.send('Sesion cerrada con exito.')
    })
})

logInOut.get('/verify',isAuthenticated,(req,res)=>{
    console.log(req.session)
    res.status(200).send('Tenes acceso K-po')
})

export default logInOut;