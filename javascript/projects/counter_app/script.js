const count = document.getElementById("count");
const increment_btn = document.getElementById("increment_btn");
const decrement_btn = document.getElementById("decrement_btn");
const reset_btn = document.getElementById("reset_btn");

let currentCount = 0;

count.textContent = currentCount;

function counter() {
    // increment function
    increment_btn.addEventListener("click", function () {
        currentCount++;
        count.textContent = currentCount;
    })

    // decrement function
    decrement_btn.addEventListener("click", function () {
        if (currentCount > 0) {
            currentCount--;
        }
        // currentCount = currentCount != 0 ? currentCount - 1 : 0; //using ternary operator(same logic)
        count.textContent = currentCount;
    })

    // reset function
    reset_btn.addEventListener("click", function () {
        currentCount = 0;
        count.textContent = currentCount;
    })
}

counter();