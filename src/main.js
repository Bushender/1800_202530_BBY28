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
  mapIframe.style.pointerEvents = isOpen ? "none" : "auto";
});

// Se drop down
document.querySelector(".button-SE").addEventListener("click", function (e) {
  e.stopPropagation();
  const content = document.querySelector(".content-SE");
  const isOpen = content.style.display === "block";
  closeAllDropdowns();
  content.style.display = isOpen ? "none" : "block";
  mapIframe.style.pointerEvents = isOpen ? "none" : "auto";
});

// Nw drop down
document.querySelector(".button-NW").addEventListener("click", function (e) {
  e.stopPropagation();
  const content = document.querySelector(".content-NW");
  const isOpen = content.style.display === "block";
  closeAllDropdowns();
  content.style.display = isOpen ? "none" : "block";
  mapIframe.style.pointerEvents = isOpen ? "none" : "auto";
});

// Ne drop down
document.querySelector(".button-NE").addEventListener("click", function (e) {
  e.stopPropagation();
  const content = document.querySelector(".content-NE");
  const isOpen = content.style.display === "block";
  closeAllDropdowns();
  content.style.display = isOpen ? "none" : "block";
  mapIframe.style.pointerEvents = isOpen ? "none" : "auto";
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

const mapWrapper = document.querySelector(".Map");
const overlay = document.querySelector(".map-overlay");
let autoLockTimer;

// Proper scroll lock for mobile (includes iOS + Android fix)
let scrollYPosition = 0;

function lockBodyScroll() {
  scrollYPosition = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollYPosition}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.documentElement.style.overflow = "hidden"; // stop scroll on html
  document.body.style.overflow = "hidden";

  // Disable all touchmove events (for Safari)
  window.addEventListener(
    "touchmove",
    preventScroll,
    { passive: false } // must be non-passive
  );
}

function unlockBodyScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";

  window.scrollTo(0, scrollYPosition);
  window.removeEventListener("touchmove", preventScroll);
}

function preventScroll(e) {
  e.preventDefault();
}

// Tap to activate map
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  lockBodyScroll();

  // Auto-lock again after 8 seconds
  clearTimeout(autoLockTimer);
  autoLockTimer = setTimeout(deactivateMap, 8000);
});

// Mouse leave (for desktop users)
mapWrapper.addEventListener("mouseleave", deactivateMap);

// Second tap (for mobile re-lock)
mapWrapper.addEventListener("touchstart", () => {
  if (overlay.classList.contains("hidden")) deactivateMap();
});

function deactivateMap() {
  overlay.classList.remove("hidden");
  unlockBodyScroll();
  clearTimeout(autoLockTimer);
}
