// Image Gallery with Enlarge on Click
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('enlargedImage');
    const closeBtn = document.querySelector('.close-btn');
    
    // Get all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail img');
    
    // Add click event to thumbnails
    thumbnails.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute('data-full');
        });
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
    
    // Initialize slideshow
    initSlideshow();
});

// Slideshow functionality
let slideIndex = 0;
let slideshowInterval;

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all slides initially
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    
    // Show the first slide
    slideIndex = 0;
    slides[slideIndex].style.display = "block";
    updateDots();
    
    // Start automatic slideshow
    startSlideshow();
}

function startSlideshow() {
    // Clear any existing interval
    clearInterval(slideshowInterval);
    
    // Set new interval
    slideshowInterval = setInterval(function() {
        showNextSlide();
    }, 3000); // Change slide every 3 seconds
}

function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    
    // Hide current slide
    slides[slideIndex].style.display = "none";
    
    // Increment slide index
    slideIndex++;
    
    // Reset to first slide if we've reached the end
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    // Show the next slide
    slides[slideIndex].style.display = "block";
    
    // Update dot indicators
    updateDots();
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    // Reset the slideshow interval when manually changing slides
    clearInterval(slideshowInterval);
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    
    // Set current slide index
    slideIndex = index;
    
    // Show the selected slide
    slides[slideIndex].style.display = "block";
    
    // Update dot indicators
    updateDots();
    
    // Restart slideshow
    startSlideshow();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active-dot');
    });
    
    // Add active class to current dot
    dots[slideIndex].classList.add('active-dot');
}