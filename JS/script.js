// ===== Smooth Scrolling =====
document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===== Greeting Message =====
const greetingElement = document.getElementById("greeting");

if (greetingElement) {
    const hour = new Date().getHours();
    let greeting = "Welcome!";

    if (hour >= 5 && hour < 12) {
        greeting = "Good morning! Welcome to my portfolio.";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon! Welcome to my portfolio.";
    } else {
        greeting = "Good evening! Welcome to my portfolio.";
    }

    greetingElement.textContent = greeting;
}

// ===== Theme Toggle with localStorage =====
const themeToggle = document.getElementById("themeToggle");

function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

applySavedTheme();

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// ===== Save Visitor Name =====
const visitorNameInput = document.getElementById("visitorName");
const saveNameBtn = document.getElementById("saveNameBtn");
const visitorMessage = document.getElementById("visitorMessage");

function loadVisitorName() {
    const savedName = localStorage.getItem("visitorName");

    if (savedName && visitorMessage) {
        visitorMessage.textContent = `Welcome back, ${savedName}!`;
    }
}

loadVisitorName();

if (saveNameBtn) {
    saveNameBtn.addEventListener("click", () => {
        const name = visitorNameInput.value.trim();

        if (name.length < 2) {
            visitorMessage.textContent = "Please enter a valid name with at least 2 characters.";
            visitorMessage.style.color = "#b91c1c";
            return;
        }

        localStorage.setItem("visitorName", name);
        visitorMessage.textContent = `Nice to meet you, ${name}!`;
        visitorMessage.style.color = "#166534";
        visitorNameInput.value = "";
    });
}

// ===== Site Timer =====
const timerElement = document.getElementById("timer");
let secondsOnSite = 0;

if (timerElement) {
    setInterval(() => {
        secondsOnSite++;
        timerElement.textContent = `You have been on this site for ${secondsOnSite} seconds.`;
    }, 1000);
}

// ===== Project Filter + Sort =====
const filterButtons = document.querySelectorAll(".filter-btn");
const projectsContainer = document.getElementById("projectsContainer");
const sortProjects = document.getElementById("sortProjects");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "all";

function updateProjects() {
    const projectCards = Array.from(document.querySelectorAll(".project-card"));
    const sortValue = sortProjects.value;

    projectCards.forEach((card) => {
        const cardCategory = card.dataset.category;

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    let visibleCards = projectCards.filter((card) => card.style.display !== "none");

    if (sortValue === "az") {
        visibleCards.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
    } else if (sortValue === "za") {
        visibleCards.sort((a, b) => b.dataset.title.localeCompare(a.dataset.title));
    }

    visibleCards.forEach((card) => projectsContainer.appendChild(card));

    if (visibleCards.length === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        selectedCategory = button.dataset.filter;
        updateProjects();
    });
});

if (sortProjects) {
    sortProjects.addEventListener("change", updateProjects);
}

// ===== GitHub API Integration =====
const loadReposBtn = document.getElementById("loadReposBtn");
const reposContainer = document.getElementById("reposContainer");
const repoStatus = document.getElementById("repoStatus");

async function loadGitHubRepos() {
    const githubUsername = "Layan19-2004";
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated`;

    repoStatus.textContent = "Loading repositories...";
    repoStatus.style.color = "";
    reposContainer.innerHTML = "";

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch repositories.");
        }

        const repos = await response.json();

        if (repos.length === 0) {
            repoStatus.textContent = "No repositories were found.";
            return;
        }

        repoStatus.textContent = "Repositories loaded successfully.";

        repos.slice(0, 6).forEach((repo) => {
            const repoCard = document.createElement("div");
            repoCard.classList.add("card");

            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : "No description available."}</p>
                <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View Repository</a>
            `;

            reposContainer.appendChild(repoCard);
        });
    } catch (error) {
        repoStatus.textContent = "Sorry, GitHub repositories could not be loaded at this time.";
        repoStatus.style.color = "#b91c1c";
    }
}

if (loadReposBtn) {
    loadReposBtn.addEventListener("click", loadGitHubRepos);
}

// ===== Contact Form Validation =====
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const namePattern = /^[A-Za-z\s]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        formMessage.style.color = "";

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "#b91c1c";
            return;
        }

        if (!namePattern.test(name)) {
            formMessage.textContent = "Name should contain letters only.";
            formMessage.style.color = "#b91c1c";
            return;
        }

        if (name.length < 2) {
            formMessage.textContent = "Name must be at least 2 characters long.";
            formMessage.style.color = "#b91c1c";
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "#b91c1c";
            return;
        }

        if (message.length < 10) {
            formMessage.textContent = "Message should be at least 10 characters long.";
            formMessage.style.color = "#b91c1c";
            return;
        }

        formMessage.textContent = "Your message has been sent successfully.";
        formMessage.style.color = "#166534";

        contactForm.reset();
    });
}

// ===== Fade-In Animation =====
const animatedElements = document.querySelectorAll(".section, .card");

animatedElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
    element.classList.add("fade-in");
});