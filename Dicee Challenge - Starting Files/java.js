var randomNumber1 = Math.random();

randomNumber1 = randomNumber1*6;

randomNumber1 = Math.floor(randomNumber1) + 1;

var diceImage = "dice" + randomNumber1 + ".png";

var locationn = "images/" + diceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", locationn);


var randomNumber2 = Math.random();

randomNumber2 = randomNumber2*6;

randomNumber2 = Math.floor(randomNumber2) + 1;

var diceImage2 = "dice" + randomNumber2 + ".png";

var locationnn = "images/" + diceImage2;


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", locationnn);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 wins";
}

else{
    document.querySelector("h1").textContent = "It's a draw";

}