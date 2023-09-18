const { error } = require("console");
const temp= require("fs");

// temp.writeFile('message.txt', 'Hello from the node js environment again', (err)=> 
// {if (err) throw err;
// console.log('The file has been saved')});

temp.readFile('./message.txt', 'utf-8' ,(err, data) => {
    if (err) throw err;
    console.log(data);});


