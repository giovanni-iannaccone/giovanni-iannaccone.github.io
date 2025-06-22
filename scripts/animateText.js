const animationSpeed = 100;

const texts = [
    "Ethical Hacker               ",
    "Operating Systems Developer  ",
    "Low Level Programming Enjoyer",
    "Open Source Enthusiast       ",
    "I use linux btw              ",
    "Full Stack Developer         ",
    "UI/UX Designer               "
];

let currentIndex = 0;
let currentText = texts[currentIndex];

async function animateText() {
    const dynamicTextElement = document.getElementById('subtitle');

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