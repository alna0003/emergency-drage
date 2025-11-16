// Åbner popup på klik
// Den finder alle mine HTML-elementer med klassen cta_btn som er mine knapper når vi åbner popup knappen. Den henter hvilken popup den skal åbne via data-popup.
document.querySelectorAll(".cta_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const popupId = btn.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "flex";
  });
});

// Lukker popup på klik på kryds
// Den finder alle elementer med klassen close-btn som  er kryds-ikonet/ knappen til at lukke popupen. Den henter hvilken popup den skal lukke via data-close.
document.querySelectorAll(".close-btn").forEach((span) => {
  span.addEventListener("click", () => {
    const popupId = span.getAttribute("data-close");
    document.getElementById(popupId).style.display = "none";
  });
});

// Lukker popup når man klikker udenfor indholdet
// Denne funktion reagerer på ethvert klik på hele vinduet.
window.onclick = function (event) {
  document.querySelectorAll(".popup").forEach((p) => {
    if (event.target == p) {
      p.style.display = "none";
    }
  });
};

// SUMMARY ÅBNER/LUKKER
document.querySelector(".cta_btn").addEventListener("click", function () {
  document.querySelector(".summary").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".summary").style.display = "none";
});

window.onclick = function (event) {
  const popup = document.querySelector(".summary");
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
