import express from 'express';
import taskRoute from './routes/tasksRoutes.js'
import { connectDB } from '../config/db.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';



dotenv.config();

const app = express();


connectDB ();

app.use("/api/tasks", taskRoute)

app.listen(5001, () => {
    console.log('server bat dau tren cong 5001')
});


