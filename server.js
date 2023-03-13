import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';

//configure env
dotenv.config();
//database config
connectDB();
//dirname
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
//rest object
const app=express();
//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirnamme,'./client/build')))
//routes
app.use('/api/v1/auth',authRoutes)
//rest api and use of callback functions for run asynchronous process
//app.get('/',(req,res)=>{
/*res.send(
    "<h1>Welcome to E-commerce app</h1>"
)
})*/
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
//PORT
const PORT=process.env.PORT || 8080;
//LISTEN
app.listen(PORT,()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white) ;
        
    });

