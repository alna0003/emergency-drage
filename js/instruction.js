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
document.querySelector("#historie").addEventListener("click", historieF);

function historieF() {
  console.log("historieF button clicked");
  document.querySelector(".info-text h2").innerText = "Historie";
  document.querySelector(".info-text p").innerText =
    "Der var engang en majestætisk drage, der vågnede op fra sin ældgamle hvile dybt i det ukendte univers. På mystisk vis blev den trukket gennem stjernerne og ankom til vores planet, hvor den blev tiltrukket af den smukke natur og de fredelige landskaber. Men denne drage var ikke som andre drager – den var magisk og også meget følsom. Hvis nogen vækkede dens vrede eller irriterede den, reagerede den med kraftfuld ild – ikke af ondskab, men som en beskyttelse af sit nye hjem. Denne ild kunne skabe dramatiske naturkatastrofer, som store brander og rasende floder, men kun når dragen var ked af det eller følte sig truet. De mennesker, der lærte at respektere og tale blidt til dragens hjerte, oplevede, at den blev venlig og beskyttende, og den viste dem, at den blot var en magisk vogter, der ønskede fred. Og fra da af levede dragen og menneskene i harmoni, hvor kærlighed og respekt forhindrede dens vrede, og naturen blomstrede under dens vogterblik.";
}
