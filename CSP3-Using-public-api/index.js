import axios from "axios";
import express from "express";
import bodyparser from "body-parser";

const port= 3000;
const app= express();
const base_url= "https://api.api-ninjas.com/v1/quotes";
const api_key= "";

app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs", {content: "Nothing to display"});
});

app.get("/get-random-fact", async (req, res)=>{

    const urlPart= JSON.stringify(req.url);
    const inputFromUser= urlPart.substring(27, urlPart.length - 1);
    // console.log(inputFromUser);

    console.log(base_url + "?category="+inputFromUser);
    try {
        const response = await axios.request(base_url + "?category="+inputFromUser, {
            headers: {
                'X-Api-Key': api_key,
              },
        });
        res.render("index.ejs", {content: JSON.stringify(response.data[0].quote)});
    } catch (error) {   
        console.error("The error is "+ error);
        res.render("index.ejs", {content: "There was an error"});
    }
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})