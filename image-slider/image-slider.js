const images = [
    "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
    "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
    "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg",
    "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
    "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Initial image load
updateImage();

// Next Button
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Previous Button
document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
