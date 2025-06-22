async function fetchSkills() {
    let i = 0;

    const response = await fetch("/assets/skills.json");
    const skills = await response.json();

    let container = document.getElementById("slider-track");

    Object.keys(skills).forEach(key => {

        container.innerHTML += `
            <div class="slide"><img src="${skills[key]}" alt="${key}" title="${key}"></div>
        `;
    });
}

fetchSkills();

window.addEventListener("load", () => {
    const sliderTrack = document.getElementById("slider-track");
    
    const trackClone = sliderTrack.innerHTML;
    sliderTrack.innerHTML += trackClone;
});