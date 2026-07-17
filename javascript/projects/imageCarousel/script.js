// 1. image array
const images = [
    "https://images.pexels.com/photos/32349608/pexels-photo-32349608.jpeg", //dog
    "https://images.pexels.com/photos/33585484/pexels-photo-33585484.jpeg", //cat
    "https://images.pexels.com/photos/13340057/pexels-photo-13340057.jpeg", //horse
    "https://images.pexels.com/photos/32655850/pexels-photo-32655850.jpeg", //goat
];

const track = document.getElementById("carousel-track");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

// 2. Dynamically inject your images into the filmstrip track
images.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add("carousel-slide");
    track.appendChild(img);
});

// 3. The sliding function
function slideToImage() {
    // Shifting by -100% per index moves the filmstrip smoothly to the left
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 4. Next button event
nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex + 1;

    if (currentIndex >= images.length) {
        currentIndex = 0; // Reset to first
    }

    slideToImage();
});

// 5. Previous button event
prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop back to last
    }

    slideToImage();
});