//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url"; 
const __dirname= dirname(fileURLToPath(import.meta.url));
const port= 3000;
const app= express();

//defining a port for the app to listen for
app.listen(port, ()=>{
    console.log(`Server running at port no ${port}`);
});

//sending the html file when the user sends a get request to the server
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

//using the body parser to get the information entered by the user
app.use(bodyParser.urlencoded({extended: true}));
var pass="";
app.post("/check", (req, res)=>{
    pass= req.body.password;
    console.log("your password is ");
    console.log(pass);
    if(pass=="ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
});     





