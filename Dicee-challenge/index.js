/* DICEES */
// Random number between 1-6
let randomNumber = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

// To get the random number for the dicee image
let randomDicee = "dice" + randomNumber + ".png";
let randomDicee2 = "dice" + randomNumber2 + ".png";

// Creating a possible src
let randomImageSource = "./images/" + randomDicee;
let randomImageSource2 = "./images/" + randomDicee2;

// Changing the source of the image to change the number of the dice
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

/* TITLE */
let titleElement = document.querySelector("h1");

if (randomNumber > randomNumber2) {
    titleElement.innerText = `Player 1 WINS!`;
} else if (randomNumber < randomNumber2) {
    titleElement.innerText = `Player 2 WINS!`;
} else {
    titleElement.innerText = `DRAW!`;
}
