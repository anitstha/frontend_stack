// 1. Select our HTML elements
const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const startButton = document.querySelector('#start-btn');

let score = 0;
let timeLeft = 30;
let bugTimer = null;
let countdownTimer = null;
let activeHole = null;

// 2. Function to pick a random hole
function getRandomHole() {
    // Clear the bug from the previous hole if there was one
    if (activeHole) {
        activeHole.classList.remove('bug');
    }

    // Pick a random index between 0 and 8
    const randomIndex = Math.floor(Math.random() * holes.length);
    activeHole = holes[randomIndex];
    
    // Add the bug class to the randomly chosen hole
    activeHole.classList.add('bug');
}

// 3. Function to handle whack/click
holes.forEach(hole => {
    hole.addEventListener('click', () => {
        // CHECK: If the clicked hole is the active bug hole
        if (hole === activeHole) {
            score++;
            scoreDisplay.textContent = score;
            
            // Remove the bug immediately so they can't double-click it
            activeHole.classList.remove('bug');
            activeHole = null; 
        }
    });
});

// 4. Start Game function
function startGame() {
    // Reset stats
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    
    // Clear any existing intervals just in case
    clearInterval(bugTimer);
    clearInterval(countdownTimer);

    // Make a bug pop up every 1000ms (1 second)
    bugTimer = setInterval(getRandomHole, 1000);

    // Countdown the clock every second
    countdownTimer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(bugTimer);
            clearInterval(countdownTimer);
            if (activeHole) activeHole.classList.remove('bug');
            alert(`Game Over! Your final score is ${score}`);
        }
    }, 1000);
}

// Attach the start button to our function
startButton.addEventListener('click', startGame);