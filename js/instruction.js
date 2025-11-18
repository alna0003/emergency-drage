console.log("Loaded instruction.js");

document.querySelector("#softspots").addEventListener("click", softspotsF);

function softspotsF() {
  console.log("softspotsF button clicked");
  document.querySelector(".info-text h2").innerText = "Softspots";
  document.querySelector(".info-text p").innerText =
    "Drager er majestætiske og mystiske væsner, som ofte portrætteres som frygtindgydende og nærmest uovervindelige. Men selv de største mest frygtindgydende drager har deres svagheder eller bløde punkter, som kan udnyttes til at komme på god fod med dem. Dragen har en softspots for smukke melodier. En blid sang kan få selv den mest vrede drage til at falde til ro. Prøv at synge lavt og roligt for at berolige dragen og skabe en forbindelse baseret på musikalsk forståelse.";
}

// -------------------------------
document.querySelector("#dragen").addEventListener("click", dragenF);

function dragenF() {
  console.log("dragenF button clicked");
  document.querySelector(".info-text h2").innerText = "Om dragen";
  document.querySelector(".info-text p").innerText =
    "Dragen har et stærkt temperament og kan blive sur eller irriteret, hvis nogen bryder dens grænser. Den reagerer bedst, når man taler roligt og respektfuldt til den. Hvis den først bliver vred, kan dens hale begynde at gløde svagt som advarsel.";
}
// -------------------------------
document.querySelector("#historie").addEventListener("click", historieF);

function historieF() {
  console.log("historieF button clicked");
  document.querySelector(".info-text h2").innerText = "Historie";
  document.querySelector(".info-text p").innerText =
    "Der var engang en majestætisk drage, der vågnede op fra sin ældgamle hvile dybt i det ukendte univers. På mystisk vis blev den trukket gennem stjernerne og ankom til vores planet, hvor den blev tiltrukket af den smukke natur og de fredelige landskaber. Men denne drage var ikke som andre drager – den var magisk og også meget følsom. Hvis nogen vækkede dens vrede eller irriterede den, reagerede den med kraftfuld ild – ikke af ondskab, men som en beskyttelse af sit nye hjem. Denne ild kunne skabe dramatiske naturkatastrofer, som store brander og rasende floder, men kun når dragen var ked af det eller følte sig truet. De mennesker, der lærte at respektere og tale blidt til dragens hjerte, oplevede, at den blev venlig og beskyttende, og den viste dem, at den blot var en magisk vogter, der ønskede fred. Og fra da af levede dragen og menneskene i harmoni, hvor kærlighed og respekt forhindrede dens vrede, og naturen blomstrede under dens vogterblik.";
}
