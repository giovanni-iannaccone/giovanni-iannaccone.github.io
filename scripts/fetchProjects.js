async function fetchProjects(limit) {
    let i = 0;

    const response = await fetch("/assets/projects.json");
    const projects = await response.json();

    let container = document.getElementById("projects-details");

    Object.keys(projects).forEach(key => {
        if (i++ >= limit)
            return;

        container.innerHTML += `
            <div class="card">
                <a href="${projects[key][0]}" target="_blank">${key}</a>
                <p>${projects[key][1]}</p>
            </div>
        `;
    });
}

const limit = document.currentScript.dataset.limit;
fetchProjects(limit);
