let container = document.querySelector("#container");
let heart = document.querySelector("#heart");

container.addEventListener("dblclick", () => {
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.style.opacity = 0.9;

    setTimeout(() => {
        heart.style.opacity = 0;
    }, 700);

    setTimeout(() => {
        heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1000);
});