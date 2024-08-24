window.addEventListener('load', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = Array.from(sliderTrack.children);
    
    const trackClone = sliderTrack.innerHTML;
    sliderTrack.innerHTML += trackClone;
});