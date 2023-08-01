import express from "express";
import morgan from "morgan";
import cors from "cors";

import index from "./router/index.js";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',index) // http://localhost:3001/

app.get('/root',(req,res)=>{ // http://localhost:3001/root
    res.json({
        index:"/root"
    });
});

export default app;