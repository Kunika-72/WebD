import express from "express";
const app= express();
const port= 3000;

app.listen(port, ()=>{
    console.log(`The app is running on the port no ${port}`)
});