function play() {
    var randomNumber1 =  Math.floor((Math.random()*5));
    var randomNumber2 =  Math.floor((Math.random()*5));

    var imageURLs= ["./images/dice1.png", 
                "./images/dice2.png", 
                "./images/dice3.png", 
                "./images/dice4.png", 
                "./images/dice5.png", 
                "./images/dice6.png"  ];

    var randomURL1= imageURLs[randomNumber1];
    var randomURL2= imageURLs[randomNumber2];

    document.getElementsByClassName("img1")[0].src= randomURL1;
    document.getElementsByClassName("img2")[0].src= randomURL2;

    if(randomNumber1 > randomNumber2){
        var text = document.querySelector(".container h1").textContent = "🚩Player 1 Wins";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector(".container h1").textContent = "Player 2 Wins🚩";
    }
    else {
        document.querySelector(".container h1").textContent= "Its a tie";
    }
}


