const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

// Function to change the displayed slide
function changeSlide() {
    imgs.forEach((img, index) => {
        img.style.display = index === n ? 'block' : 'none';
        img.setAttribute('aria-hidden', index !== n); // Accessibility enhancement
    });
}

changeSlide(); // Initial slide display

// Event listener for previous button
prev_btn.addEventListener('click', () => {
    n = (n > 0) ? n - 1 : imgs.length - 1; // Cycle to last slide
    changeSlide();
});

// Event listener for next button
next_btn.addEventListener('click', () => {
    n = (n < imgs.length - 1) ? n + 1 : 0; // Cycle to first slide
    changeSlide();
});

// Horizontal scrolling for product containers
const scrollContainers = document.querySelectorAll('.products');

scrollContainers.forEach(item => {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY; // Scroll horizontally
    });
});
