import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  console.group("no auth route was hit");
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
    try {
      const url= API_URL + "random/";
      const response = await axios.get(url);
      const content= JSON.stringify(response.data);
      res.render("index.ejs", {content: content});
      console.log(content);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
    } catch (error) {
      // Handle error
      console.error(error);
      res.render("index.ejs", {content: "no data available"});
    }
});

app.get("/basicAuth", async(req, res) => {
  // the endpoints are always added to the main base url
  console.log("Basic authorization end point");
  try{
    const url= API_URL+ "all?page=2";
    console.log(url);
    const response = await axios.get(url , 
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        }
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      }
    );
    console.log(response.data);
    const content= JSON.stringify(response.data);
    res.render("index.ejs", {content: content});
  }  catch(error) {
    console.log(error);
    console.log("no resources found");
  }

  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  try {
    const url= API_URL + "filter?score=5&apiKey=" +yourAPIKey;
    console.log(url);
    const response = await axios.get(url);
    const content= JSON.stringify(response.data);
    res.render("index.ejs", {content: content});
    // console.log(content);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  } catch (error) {
    // Handle error
    console.error(error);
    res.render("index.ejs", {content: "no data available"});
  }
  
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async(req, res) => {
  console.log("bearer token path was hit");
  try{
    const url = API_URL+ "secrets/42";
    const token= "Bearer "+ yourBearerToken;
    console.log(url);
    const response= await axios.get(url, {
      headers: { 
        Authorization: token
      },
    });
    console.log(response.data);
    const content= JSON.stringify(response.data);
    res.render("index.ejs", {content: content});
  }  catch (error){
    console.log(error);
    res.render("index.ejs", {content: "kuch nhi mila mujhe, bol kya krega"});
  }
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
