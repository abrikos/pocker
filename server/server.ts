import express from "express";
import * as dotenv from 'dotenv';
import {json} from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import Controllers from "./controllers"
import * as Models from "./models"

dotenv.config();
const app:express.Application = express();

app.use(json());
const port: string | undefined = process.env.SERVER_PORT; // default port to listen

app.set("view engine", "ejs");

mongoose.connect(process.env.MONGODB_URI as string, {useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions)
    .then(() => {
        console.log('Connect MongoDB:', process.env.MONGODB_URI)
    })
    .catch(e => {
        console.log('Mongoose error:', e.message)
    })

//Attach models
app.set("Models",Models)

//Attach controllers
for(const controller of Controllers){
    controller(app)
}

// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
