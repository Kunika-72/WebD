/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';
inquirer.prompt([
    {
        type: 'input',
        name: 'URL',
        message: 'Enter your URL here',
    }, 

])
.then((answers)=>{
    const url= answers.URL;
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_of_google.png'));
    fs.writeFile('message.txt', url, (err)=>{
        if(err) throw err;
        else console.log('File has been saved');
    });
    //pass link to the qr image generator
    //take the link to display
})
.catch((error)=>{
    if(error.itTtyError){}
    else{}
});

//const prompt= inquirer.createPromptModule();
