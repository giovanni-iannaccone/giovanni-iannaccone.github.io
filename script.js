const dynamicTextElement = document.getElementById('dynamicText');

const texts = [
    "Hi, I'm Giovanni  !",
    "Welcome to my world"
];

let currentIndex = 0;
let currentText = texts[currentIndex];
let writingInterval;
let animationSpeed = 100;

function animateText() {
    let newText = texts[currentIndex];
    let minTextLength = Math.min(currentText.length, newText.length);
    let animatedText = "";
    let i = 0;

    writingInterval = setInterval(() => {
        animatedText += newText[i];
        dynamicTextElement.textContent = animatedText + currentText.substring(animatedText.length);
        i++;
        if (i >= minTextLength) {
            clearInterval(writingInterval);
            currentText = newText;
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(animateText, 2000);
        }
    }, animationSpeed);
}

animateText();

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('animate');
                entry.target.classList.add('hidden');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });
});
