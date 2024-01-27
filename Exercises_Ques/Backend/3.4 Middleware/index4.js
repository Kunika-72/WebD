//this is good
//better practice is to write a function differently

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
  res.sendFile(__dirname+ "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(bodyParser.urlencoded({extended: true}));

//first approach- not preferred
app.post("/submit", (req, res)=> {
  var street_name= req.body.street;               //way no 2
  var pet_name= req.body.pet;
  res.send(`<h1>Your Band Name is 🥁🥁</h1> <h2>${street_name} ${pet_name}</h2>`);
  console.log("another entry added successfully");
});
//ended

//<-new approach start
var bandName="";
function RandomBandGenrator(req, res, next){
  bandName= req.body["street"]+ req.body["pet"];    //way no 1
  console.log(bandName);
  next();
}
app.use(RandomBandGenrator);
app.post("/submit", ((req, res)=>{
  res.send(`<h1>Your Band Name is 🥁🥁</h1> <h2>${bandName}</h2>`);
}));
//end->








