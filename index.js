var randomNumbar1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage = "images/dice" + randomNumbar1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);

var randomNumbar2 = Math.floor(Math.random() * 6)+1;

var randomDiceImage1 = "images/dice" + randomNumbar2 + ".png";

var image2 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage1);

if(randomNumbar1>randomNumbar2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumbar1<randomNumbar2){
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
