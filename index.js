
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");

var randomImage1 = "images/dice" + random1 + ".png";
var randomImage2 = "images/dice" + random2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if (random1 > random2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (random1 < random2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}