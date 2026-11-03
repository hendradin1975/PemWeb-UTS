// Get the two language buttons from the navbar
const tombolEN = document.querySelector(".btn-en");
const tombolID = document.querySelector(".btn-id");

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