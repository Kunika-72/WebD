import express from "express";
const app= express();
const port= 3000;

app.listen(port, ()=>{
    console.log(`App is listening on port no ${port}`)
})

const d = new Date();
const day= d.getDay();

var weektime= "WeekDay";
var adv= "Its time to work hard";

if(day==0 || day==6)
{
    weektime= "WeekEnd";
    adv= "Its time for you to enjoy";
}

app.get("/", (req, res)=>{
    res.render("view.ejs", 
    { weektime: weektime, 
      advice: adv});
});


