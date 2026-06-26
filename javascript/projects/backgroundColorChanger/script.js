let button = document.getElementById("btn");
let body = document.getElementById("main");
let color = document.getElementById("color-text");

let themes = ["white", "red", "green", "blue", "black", "orange", "yellow", "purple", "silver", "pink"]

button.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * themes.length);
    colorText = themes[randomIndex];

    body.style.backgroundColor = colorText;

    color.innerHTML = colorText;
})