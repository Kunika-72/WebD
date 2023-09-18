console.log($("h1").css("color"));

$("h1").addClass("big-text");

$("h1").text("bye");

console.log($("a"). attr("href", "https://www.bing.com"));

document.querySelector("input").addEventListener("keypress", function(event) {
    console.log(event.key)
})

var previousString= "";
$("input").keypress(function(event){
    $("h1").text(previousString + event.key);
    previousString+= event.key;
})

