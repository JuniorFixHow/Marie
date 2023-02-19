import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Connect from './Db.js';

import studentRoutes from './routes/studentRoutes.js'

const app = express();

dotenv.config();
Connect();

mongoose.connection.on('disconnected', ()=>{
    console.log('Mongo disconnected')
})
mongoose.connection.on('connected', ()=>{
    console.log('Mongo is back!')
})
//middlewares
app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

const port = 7500 || process.env.PORT;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})