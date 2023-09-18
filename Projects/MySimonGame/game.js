//adding animations and sounds 
$(".red").click( function() {
    $(".red").addClass("pressed");
    setTimeout( () => { 
        $(".red").removeClass("pressed"); 
        }, 100 );
        var url= "./sounds/"+ "red" + ".mp3";
        new Audio(url).play();    
});

$(".blue").click( function() {
    $(".blue").addClass("pressed");
    setTimeout( () => { 
        $(".blue").removeClass("pressed"); 
        }, 100 );
        var url= "./sounds/"+ "blue" + ".mp3";
        new Audio(url).play();    
});

$(".green").click( function() {
    $(".green").addClass("pressed");
    setTimeout( () => { 
        $(".green").removeClass("pressed"); 
        }, 100 );
        var url= "./sounds/"+ "green" + ".mp3";
        new Audio(url).play();    
});

$(".yellow").click( function() {
    $(".yellow").addClass("pressed");
    setTimeout( () => { 
        $(".yellow").removeClass("pressed"); 
        }, 100 );
        var url= "./sounds/"+ "yellow" + ".mp3";
        new Audio(url).play();    
});

//flashing the sequence
function flash(color){
    var selector= "." + color;
    $(selector).fadeToggle();
    setTimeout(  () => {
        $(selector).fadeToggle();
    } , 100
    );
    var url= "./sounds/"+ color + ".mp3";
    var audio= new Audio(url);
    audio.play();
}

function playWrongSound() {
    var audio= new Audio("./sounds/wrong.mp3");
    audio.play();
}


//don't touch above it
var userClickedPattern= [];
var level= 0;   
var started= false; 

function nextLevel(){
    level++;
    $("h1").text("Level "+ level);
}

function reset() {
    gamePattern= [];
    userClickedPattern= [];
    started= false;
    level=0;
}

//sequenceGenerator
var colorsArray= ["red", "yellow", "green", "blue"];
var gamePattern= [];
function nextSequence() { 
        nextLevel();
        randomNumber =Math.floor(Math.random() * 4);
        gamePattern.push(colorsArray[randomNumber]);
        flash(colorsArray[randomNumber]);
        console.log(colorsArray[randomNumber]+ " was pushed into the gamaPatter");   
}

//staring the game 
document.addEventListener("keypress", function(event) {
    if(!started){
        if (event.isTrusted === true) {
            started= true;
            gameStart(); 
        }
    }
    
});

function checkAnswer(level){
    if(gamePattern[userClickedPattern.length -1] === userClickedPattern[userClickedPattern.length -1]) {
        console.log("right");
    }
    else {
        console.log("Wrong");
        playWrongSound();
        $("h1").text("Game Over! Press any key to start");
        $("body").addClass("game-over");
        setTimeout( () => {
            $("body").removeClass("game-over");
        }, 200);
        reset();
    }
    if(userClickedPattern.length === level) {
        userClickedPattern= [];
        nextSequence();
    }
}

function gameStart(){

    alert("game Started");
    setTimeout( () => {
        nextSequence();
    }, 1000);
    
    $(document).click( function (event) {
        if(event.target.id === "red" || event.target.id === "blue" || event.target.id === "yellow" || event.target.id === "green"){
            userChosenColor= event.target.id;
            userClickedPattern.push(userChosenColor);
            console.log(userClickedPattern+ " was clicked");
            checkAnswer(level);
        }
    });
    
}


