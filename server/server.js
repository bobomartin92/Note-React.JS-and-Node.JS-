import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import noteRoutes from './routes/notes.js';
import dotenv from 'dotenv'

const app = express()

dotenv.config();


app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use('/', noteRoutes);

const PORT = process.env.PORT || process.env.LOCAL_PORT;

mongoose.connect(process.env.cloudDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then (() => app.listen(PORT, () => console.log(`Server running at port: ${PORT}`)))
    .catch((err) => console.log(err.message));
