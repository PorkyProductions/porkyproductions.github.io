// JavaScript Source Code
// Original Author: PorkyProductions
// Language: javascript es6
// Path: js\Header.js
$(document).ready(() => {
    OnStart();
});
$(document).on("load", () => {
    $("#header").fadeIn("slow");
});
// if the user scrolls down, hide the header
function ModifyHeader() {
    console.log(DEVICE_type);
    if (DEVICE_type == "mobile") {
        $("#logoText").hide();
    }
}
let title = document.getElementById("title");
let titleText = document.getElementById("titleText");
function ChangeTitle(text) {
    title.style.display = "block";
    titleText.innerHTML = text;
}
function OnStart() {
    //all code will run on load
    console.log("ready");
    ModifyHeader();
    let author = "PorkyProductions";
    let title = "PorkyProductions.io";
    let titleText = logoText.innerHTML;
    let authorText = "The PorkyProductions team";
    console.log("Header.js loaded");
    console.log(title);
    console.log(titleText);
    console.log(author);
    console.log(authorText);
}
;
const altLogotext = [
    "PorkyProductions",
    "PorkyProductions.io",
    "The PorkyProductions team",
    "PeanutButterPatties",
    "PatinjoesPeople",
    "PutiminPork",
    "PorkyPants",
    "PorkyPants.io",
    "PorkyPants.com",
    "PorkyPants.org",
    "PorkyPants.net",
    "PopcornPackage",
    "PainPage",
    "PaperPair",
    "PearlPair",
    "PartyPartner",
    "PaymentPattern",
    "PartyPackage",
    "PaymentPages",
    "PearlPackages",
    "PerformancePercentage",
];
var altLogoClickAmount = 0;
function generateText() {
    logoText = altLogotext[Math.floor(Math.random() * altLogotext.length)];
    console.log(logoText);
    document.getElementById("logoText").innerHTML = logoText;
    altLogoClickAmount++;
    console.log(altLogoClickAmount);
    if (altLogoClickAmount == 10) {
        window.location.href = "https://github.com/PorkyProductions/porkyproductions.github.io";
    }
    ;
    return 0;
}
;
