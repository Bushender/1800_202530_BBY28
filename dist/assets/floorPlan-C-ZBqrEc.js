document.addEventListener("click",t=>{if(!t.target.classList.contains("floor-btn"))return;const o=t.target.getAttribute("data-floor");o&&(window.location.href=`/floorPlaceholder.html?floor=${o}`)});
