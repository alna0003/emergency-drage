console.log("Loaded instruction.js");

document.querySelector("#softspots").addEventListener("click", softspotsF);

function softspotsF() {
  console.log("softspotsF button clicked");
  document.querySelector(".info-text h2").innerText = "Softspots";
  document.querySelector(".info-text p").innerText =
    "Her får du mere viden omkring Dragens softspots og hvordan du bedst håndterer dem i en nødsituation.";
}

// -------------------------------
document.querySelector("#dragen").addEventListener("click", dragenF);

function dragenF() {
  console.log("dragenF button clicked");
  document.querySelector(".info-text h2").innerText = "Om dragen";
  document.querySelector(".info-text p").innerText =
    "Her får du mere viden omkring Dragen.";
}
// -------------------------------
document.querySelector("#mave").addEventListener("click", maveF);

function maveF() {
  console.log("maveF button clicked");
  document.querySelector(".info-text h2").innerText = "Mave";
  document.querySelector(".info-text p").innerText =
    "Her får du mere viden omkring Dragens mave og hvordan du bedst håndterer den i en nødsituation.";
}
