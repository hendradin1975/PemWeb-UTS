// Get the two language buttons from the navbar
const tombolEN = document.querySelector(".btn-en");
const tombolID = document.querySelector(".btn-id");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".container-menu");

if (navToggle && navMenu) {
    const closeNavigation = () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        navToggle.querySelector("i").className = "bx bx-menu";
        navMenu.querySelectorAll(".dropdown.is-open").forEach((dropdown) => {
            dropdown.classList.remove("is-open");
            dropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
            dropdown.querySelector(".dropdown-toggle").setAttribute("aria-label", "Open SDG submenu");
        });
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        navToggle.querySelector("i").className = isOpen ? "bx bx-x" : "bx bx-menu";
    });

    navMenu.addEventListener("click", (event) => {
        const toggle = event.target.closest(".dropdown-toggle");
        if (toggle) {
            const dropdown = toggle.closest(".dropdown");
            const isOpen = dropdown.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute("aria-label", isOpen ? "Close SDG submenu" : "Open SDG submenu");
        } else if (event.target.closest("a")) {
            closeNavigation();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            const openDropdown = navMenu.querySelector(".dropdown.is-open");
            if (openDropdown) {
                openDropdown.classList.remove("is-open");
                openDropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
                openDropdown.querySelector(".dropdown-toggle").setAttribute("aria-label", "Open SDG submenu");
                openDropdown.querySelector(".dropdown-toggle").focus();
            } else if (navMenu.classList.contains("is-open")) {
                closeNavigation();
                navToggle.focus();
            }
        }
    });

    window.matchMedia("(min-width: 785px)").addEventListener("change", closeNavigation);
}

// Switch the page to Indonesian
function IDlang() {
    document.body.classList.add("indo");
    tombolEN.style.display = "none";
    tombolID.style.display = "flex";
    localStorage.setItem("bahasa", "id");
}

// Switch the page to English
function ENlang() {
    document.body.classList.remove("indo");
    tombolID.style.display = "none";
    tombolEN.style.display = "flex";
    localStorage.setItem("bahasa", "en");
}

// Run the right function when a button is clicked
tombolEN.addEventListener("click", IDlang);
tombolID.addEventListener("click", ENlang);

// When the page loads, reuse the last language the visitor chose
if (localStorage.getItem("bahasa") === "id") {
    IDlang();
}
