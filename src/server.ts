import 'reflect-metadata'
import express, { request, response } from 'express';
import { router } from "./routes"


import "./database"

const app = express();

app.use(express.json()) // talking to express that i will work with JSON
app.use(router);

app.listen(3000, () => console.log('server is running'));
