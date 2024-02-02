import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const base_url= "https://secrets-api.appbrewery.com/";
const app= express();
const port= 3000;
const yourtokenhere= "";
const config= {headers: 
    {
    Authorization: `Bearer ${yourtokenhere}`,
    }
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs", {content: "Waiting for data"});
});

app.post("/get-secret", async (req, res)=>{
    const id= req.body.id;
    try{
        const response= await axios.get(base_url + "secrets/"+ id, config);
        res.render("index.ejs", {content: JSON.stringify(response.data)});
    } catch (error) {
        res.status(404);
        res.render("index.ejs", {content: "There was an error"});
    }
});

app.post("/post-secret", async (req, res)=>{
    console.log(req.body);
    console.log(base_url + "secrets/");
    try{
        const response= await axios.post(base_url + "secrets/", req.body, config);
        console.log(response.data);
        res.render("index.ejs", {content: JSON.stringify(response.data)});
    } catch (error) {
        //console.error(error);
        res.render("index.ejs", {content: error});
    }
});

// app.post("/post-secret", async (req, res) => {
//     try {
//       const result = await axios.post(base_url + "secrets/", req.body, config);
//       res.render("index.ejs", { content: JSON.stringify(result.data) });
//     } catch (error) {
//       res.render("index.ejs", {content: error});
//     }
//   });

//not working
app.post("/put-secret", async (req, res)=>{
    const id= req.body.id;
    const secret= req.body.secret;
    const score= req.body.score;
    try{
        const response= await axios.put(base_url + "secrets/"+id, {
            secret: secret,
            score: score,
        }, config);
        res.render("index.js", {content: `Secret no ${id} has been changed`});
    } catch (error) {
        res.render("index.ejs", {content: "no new secret has been put"});
    }
});

//not working
app.post("/patch-secret", async (req, res)=>{
    const id= req.body.id;
    const secret= req.body.secret;
    const score= req.body.score;
    try{
        const response= await axios.patch(base_url + "secrets/"+id, {
            secret: secret,
            score: score,
        }, config);
        res.render("index.js", {content: `Secret no ${id} has been updated`});
    } catch (error) {
        res.render("index.ejs", {content: "no new secret has been put"});
    }
});

//not working
app.post("/delete-secret", async (req, res)=>{
    const id= req.body.id;
    try{
        const response= await axios.delete(base_url + "secrets/"+id, config);
        res.render("index.js", {content: `Secret no ${id} has been deleted`});
    } catch (error) {
        console.log(res.statusCode);
        res.render("index.ejs", {content: "no new secret has been deleted"});
    }
});

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});