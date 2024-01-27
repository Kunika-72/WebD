import express from "express";
const app= express();
const port= 3000;

//will send whenever the port will run
//this data will be sent when the client will request the data
app.get('/', (req, res)=>{
    res.send("<h1>Hello World</h1>");
});

app.get('/about', (req, res)=>{
    res.send("<h1>this is about page</h1>");
});

app.get('/contact-me', (req, res)=>{
    res.send("<h1>This is contact me page</h1>");
});

//setting the port to listen
app.listen(port, ()=>{
    console.log(`the port is running on port no ${port}`);
});