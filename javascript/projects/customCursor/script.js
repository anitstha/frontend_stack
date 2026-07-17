let main = document.querySelector("#main")
let circle = document.querySelector("#circle")

main.addEventListener("mousemove", (dets) => {
    circle.style.left = dets.x + "px"
    circle.style.top = dets.y + "px"
})