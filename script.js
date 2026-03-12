/**
 * Ark Furniture - Simple Vanilla JS Interactivity
 * Focuses on slider navigation visual updates.
 */

document.addEventListener('DOMContentLoaded', () => {
    const btnLeft = document.querySelector('.arrow-left');
    const btnRight = document.querySelector('.arrow-right');
    const currentSlideEl = document.querySelector('.slide-num:first-of-type');
    
    let currentSlide = 1;
    const totalSlides = 6;

    if (btnLeft && btnRight && currentSlideEl) {
        btnLeft.addEventListener('click', () => {
            currentSlide = currentSlide > 1 ? currentSlide - 1 : totalSlides;
            updateSlideIndicator();
            // TODO: Add visual slide transition logic here when images are available
        });

        btnRight.addEventListener('click', () => {
            currentSlide = currentSlide < totalSlides ? currentSlide + 1 : 1;
            updateSlideIndicator();
            // TODO: Add visual slide transition logic here when images are available
        });
    }

    function updateSlideIndicator() {
        // Pad single digits with leading zero
        currentSlideEl.textContent = currentSlide.toString().padStart(2, '0');
    }
    
    // Smooth scrolling for anchor links (placeholder)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });

    // Featured Collections Slider placeholders
    const collectionBtnLeft = document.querySelector('.collection-arrow.left-arrow');
    const collectionBtnRight = document.querySelector('.collection-arrow.right-arrow');

    if (collectionBtnLeft) {
        collectionBtnLeft.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Collection slider left clicked (placeholder)');
        });
    }

    if (collectionBtnRight) {
        collectionBtnRight.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Collection slider right clicked (placeholder)');
        });
    }

    // Sofas & Sectionals Banner Slider
    const sofasTrack = document.getElementById('sofas-track');
    const sofasPrev = document.getElementById('sofas-prev');
    const sofasNext = document.getElementById('sofas-next');
    
    if (sofasTrack && sofasPrev && sofasNext) {
        const slides = sofasTrack.querySelectorAll('.banner-img');
        let currentSofaSlide = 0;
        
        function updateSofaSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('slide-active');
                } else {
                    slide.classList.remove('slide-active');
                }
            });
        }
        
        sofasPrev.addEventListener('click', (e) => {
            e.preventDefault();
            currentSofaSlide = (currentSofaSlide - 1 + slides.length) % slides.length;
            updateSofaSlide(currentSofaSlide);
        });
        
        sofasNext.addEventListener('click', (e) => {
            e.preventDefault();
            currentSofaSlide = (currentSofaSlide + 1) % slides.length;
            updateSofaSlide(currentSofaSlide);
        });
    }

    // Video Testimonial Mute Toggle
    const audioBtns = document.querySelectorAll('.audio-btn');
    audioBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.testimonial-card');
            const video = card.querySelector('.testimonial-video');
            
            if (video) {
                video.muted = !video.muted;
                
                // Reaction: Toggle class for visual feedback
                btn.classList.toggle('is-unmuted');
                
                // Optional: Swap icons or change color (handled in CSS via .is-unmuted)
                if (!video.muted) {
                    console.log('Video unmuted, audio playing');
                    video.play(); // Ensure it keeps playing
                } else {
                    console.log('Video muted');
                }
            }
        });
    });
});
