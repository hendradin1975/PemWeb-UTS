// Variable
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".container-menu");
const englishButton = document.querySelector(".btn-en");
const indonesianButton = document.querySelector(".btn-id");

// Close menu Function for Navbar and Navbar Dropdown
function closeMenu() {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    navToggle.querySelector("i").className = "bx bx-menu";
    navMenu.querySelectorAll(".dropdown.is-open").forEach((dropdown) => {
        dropdown.classList.remove("is-open");
        dropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
        dropdown.querySelector(".dropdown-toggle").setAttribute("aria-label", "Open SDG submenu");
    });
}

// Open and Close click action
navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    if (!isOpen) {
        closeMenu();
        return;
    }
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    navToggle.querySelector("i").className = isOpen ? "bx bx-x" : "bx bx-menu";
});

// Toggle Navbar Dropdown
navMenu.addEventListener("click", (event) => {
    const toggle = event.target.closest(".dropdown-toggle");
    if (toggle) {
        const dropdown = toggle.closest(".dropdown");
        const isOpen = dropdown.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Close SDG submenu" : "Open SDG submenu");
    } else if (event.target.closest("a")) {
        closeMenu();
    }
});

// Klik ESC Also Cancelling Navbar Dropdown
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
        closeMenu();
        navToggle.focus();
    }
});

// Close menu dropdown to close if window getting reset
window.matchMedia("(min-width: 785px)").addEventListener("change", closeMenu);

// Toggle Langguage
function setLanguage(language, remember = true) {
    const isIndonesian = language === "id";
    document.body.classList.toggle("indo", isIndonesian);
    englishButton.style.display = isIndonesian ? "none" : "flex";
    indonesianButton.style.display = isIndonesian ? "flex" : "none";
    if (remember) {
        localStorage.setItem("bahasa", language);
    }
}

// Check button status
englishButton.addEventListener("click", () => setLanguage("id"));
indonesianButton.addEventListener("click", () => setLanguage("en"));
setLanguage(localStorage.getItem("bahasa") === "id" ? "id" : "en", false);
