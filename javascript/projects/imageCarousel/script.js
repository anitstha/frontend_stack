const images = [
    "https://images.pexels.com/photos/28739438/pexels-photo-28739438.jpeg", //dog
    "https://images.pexels.com/photos/30189401/pexels-photo-30189401.jpeg", //cat
    "https://images.pexels.com/photos/16823967/pexels-photo-16823967.jpeg", //horse
    "https://images.pexels.com/photos/30678865/pexels-photo-30678865.jpeg", //goat
]

let prev = document.getElementById("prev-btn");
let next = document.getElementById("next-btn");
let carousel_img = document.getElementById("carousel-img");

let currentIndex = 0;

// Set initial image
carousel_img.src = images[currentIndex];

// NEXT BUTTON LOGIC
next.addEventListener("click", () => {
    // 1. Increment the index pointer by 1
    currentIndex++;
    
    // 2. Loop check: If it goes past the last image (index 3), reset to the first image (0)
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    // 3. Update the source attribute on the screen
    carousel_img.src = images[currentIndex];
});

// PREVIOUS BUTTON LOGIC
prev.addEventListener("click", () => {
    // 1. Decrement the index pointer by 1
    currentIndex--;
    
    // 2. Loop check: If it goes below 0, jump straight to the last image index (3)
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    // 3. Update the source attribute on the screen
    carousel_img.src = images[currentIndex];
});