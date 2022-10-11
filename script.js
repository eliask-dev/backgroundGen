var firstColor = document.querySelector("#firstColor");
var secondColor = document.querySelector("#secondColor");
var body = document.querySelector("body");
var currentDescription = document.querySelector("#colorCodes");
var randomButton = document.querySelector(".randomButton");

function changeBackgroundColor(colorOne, colorTwo) {
    body.style.background = `linear-gradient(to right,${colorOne},${colorTwo})`;
    currentDescription.textContent = `linear-gradient(${colorOne}, ${colorTwo})`; 
}

function generateRandomColor() {
    var firstGeneratedColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()}`;
    var secondGeneratedColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()}`;

    changeBackgroundColor(firstGeneratedColor, secondGeneratedColor);

    firstColor.value = firstGeneratedColor;
    secondColor.value = secondGeneratedColor;

}

firstColor.addEventListener("input", function() {
    changeBackgroundColor(firstColor.value, secondColor.value);
});

secondColor.addEventListener("input", function() {
    changeBackgroundColor(firstColor.value, secondColor.value);
});

randomButton.addEventListener("click", generateRandomColor);

const basket = ['apples', 'juice', 'strawberry'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item of basket) {
    console.log(item);
}

for (item in detailedBasket) {
    console.log(item);
}



