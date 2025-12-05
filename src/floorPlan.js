// Navigate to floor placeholder on floor button click
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("floor-btn")) return;

  const floorCode = e.target.getAttribute("data-floor");

  if (!floorCode) return;

  window.location.href = `/floorPlaceholder.html?floor=${floorCode}`;
});
