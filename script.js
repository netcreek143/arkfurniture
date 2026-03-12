/**
 * Ark Furniture - Simple Vanilla JS Interactivity
 * Focuses on slider navigation visual updates.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Lenis Smooth Scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Header interaction - shadow on scroll
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
    
    // SVG Icons for toggling
    const muteSVG = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mute-icon">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>`;
        
    const speakerSVG = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="speaker-icon">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>`;

    audioBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.testimonial-card');
            const video = card.querySelector('.testimonial-video');
            
            if (video) {
                video.muted = !video.muted;
                
                // Reaction: Toggle class and swap SVG
                if (video.muted) {
                    btn.classList.remove('is-unmuted');
                    btn.innerHTML = muteSVG;
                    console.log('Video muted');
                } else {
                    btn.classList.add('is-unmuted');
                    btn.innerHTML = speakerSVG;
                    console.log('Video unmuted, audio playing');
                    video.play(); // Ensure it keeps playing
                }
            }
        });
    });
});
