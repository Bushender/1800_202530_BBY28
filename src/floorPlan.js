// Detects which button is clicked and directs to that floor
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("floor-btn")) return;

  const floorCode = e.target.getAttribute("data-floor");

  if (!floorCode) return;

  window.location.href = `/floorPlaceholder.html?floor=${floorCode}`;
});
