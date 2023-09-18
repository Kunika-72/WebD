var audioURLs= ["./sounds/tom-1.mp3", 
                "./sounds/tom-2.mp3", 
                "./sounds/tom-3.mp3", 
                "./sounds/tom-4.mp3", 
                "./sounds/snare.mp3", 
                "./sounds/crash.mp3", 
                "./sounds/kick-bass.mp3"];

var audioNumberLength= audioURLs.length;
for(let i=0; i< audioNumberLength; i++){

    var drumClassI= document.querySelectorAll(".drum")[i];
    drumClassI.addEventListener("click", function () {
        //new Audio(audioURLs[i]).play();
        //buttonAnimation(event.key);
        var buttonPressed = this.innerHTML;
        console.log(buttonPressed);
        produceSound(buttonPressed);
        buttonAnimation(buttonPressed);
    });

}

function produceSound (keyboardInput) {

    switch(keyboardInput){

        case "w":            new Audio(audioURLs[0]).play();        break;
        case "a":            new Audio(audioURLs[1]).play();        break;
        case "s":            new Audio(audioURLs[2]).play();        break;
        case "d":            new Audio(audioURLs[3]).play();        break;
        case "j":            new Audio(audioURLs[4]).play();        break;
        case "k":            new Audio(audioURLs[5]).play();        break;
        case "l":            new Audio(audioURLs[6]).play();        break;
        default:            console.log("other key was pressed");   break;

    }
}


document.addEventListener("keypress", function (event) {
    var inputFromKeybaord= event.key;
    console.log(inputFromKeybaord);
    produceSound(inputFromKeybaord);
    buttonAnimation(inputFromKeybaord);
});

function buttonAnimation( KeyPressed){
    //some sample code here
    var activeButton= document.querySelector("."+ KeyPressed);
    activeButton.classList.add("pressed");
    setTimeout(  () => {
        activeButton.classList.remove("pressed");
    } , 200

    );
    
}











