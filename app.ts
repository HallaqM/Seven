import { Request, Response, Express } from "express";
import express from 'express'
import connection from "./db/db.js";
import AppDataSource from "./db/db.js";




const app: Express = express();
const PORT: Number = 3000;
const Root: "/" = "/";




// Route.
app.get(Root, (req: Request, res: Response) => {
    res.send("hello world");
})

app.get("/data", (req: Request, res: Response) => {
    res.json({
        data: 'success',
        Type: true,
    });

})


let Server = app.listen(PORT, () => {

    console.log("port is running on the " + PORT);
});








// Handle the connection.
AppDataSource.initialize().then(async () => {
    
    console.log("Database is connected");
})
.catch(err => {
    console.log(err);
});


    



