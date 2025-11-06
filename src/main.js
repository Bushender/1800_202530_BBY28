import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/style.css";

const mapIframe = document.querySelector(".BCITMAP");

// Sw drop down
document.querySelector(".button-SW").addEventListener("click", function (e) {
  e.stopPropagation();
  const content = document.querySelector(".content-SW");
  const isOpen = content.style.display === "block";
  closeAllDropdowns();
  content.style.display = isOpen ? "none" : "block";
  mapIframe.style.pointerEvents = isOpen ? "auto" : "none";
});

// Se drop down
document.querySelector(".button-SE").addEventListener("click", function (e) {
  e.stopPropagation();
  const content = document.querySelector(".content-SE");
  const isOpen = content.style.display === "block";
  closeAllDropdowns();
  content.style.display = isOpen ? "none" : "block";
  mapIframe.style.pointerEvents = isOpen ? "auto" : "none";
});

// Nw drop down
document.querySelector(".button-NW").addEventListener("click", function (e) {
  e.stopPropagation();
  const content = document.querySelector(".content-NW");
  const isOpen = content.style.display === "block";
  closeAllDropdowns();
  content.style.display = isOpen ? "none" : "block";
  mapIframe.style.pointerEvents = isOpen ? "auto" : "none";
});

// Ne drop down
document.querySelector(".button-NE").addEventListener("click", function (e) {
  e.stopPropagation();
  const content = document.querySelector(".content-NE");
  const isOpen = content.style.display === "block";
  closeAllDropdowns();
  content.style.display = isOpen ? "none" : "block";
  mapIframe.style.pointerEvents = isOpen ? "auto" : "none";
});

// Close all menus
function closeAllDropdowns() {
  document.querySelector(".content-SW").style.display = "none";
  document.querySelector(".content-SE").style.display = "none";
  document.querySelector(".content-NW").style.display = "none";
  document.querySelector(".content-NE").style.display = "none";
}

// Clicking anywhere else closes menus and re-enables the map
window.addEventListener("click", function () {
  closeAllDropdowns();
  mapIframe.style.pointerEvents = "auto";
});

// Dropdown navigation
// Dropdown navigation for same-level pages
function setupDropdownNavigation(selector) {
  document.querySelectorAll(`${selector} li`).forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.textContent.trim();
      window.location.href = `/${target}.html`;
    });
  });
}

// Set up navigation for each section
setupDropdownNavigation(".content-SW");
setupDropdownNavigation(".content-SE");
setupDropdownNavigation(".content-NW");
setupDropdownNavigation(".content-NE");
