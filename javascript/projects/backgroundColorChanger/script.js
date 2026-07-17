let button = document.getElementById("btn");
let container = document.getElementById("main");
let colorCode = document.getElementById("color-code");

/*
// generating random color of predefined array
let themes = ["white", "red", "green", "blue", "black", "orange", "yellow", "purple", "silver", "pink"]

button.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * themes.length);
    randomColor = themes[randomIndex];

    container.style.backgroundColor = randomColor;

    colorCode.innerHTML = randomColor;
})
*/


//generating random color with function

const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);

    container.style.backgroundColor = randomCode;
    colorCode.textContent = randomCode;

    // copies the colorCode when button clicked
    navigator.clipboard.writeText(randomCode);
}

// event listener 
button.addEventListener("click", getColor);

// initial call
getColor();