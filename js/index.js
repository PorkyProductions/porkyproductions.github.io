// JavaScript Source Code
// Original Author: PorkyProductions
// Language: javascript es6
// Path: js\Header.js
$(document).ready(function () {
    OnStart();
});
function ModifyHeader() {
    console.log(DEVICE_type);
    if (DEVICE_type == "mobile") {
        $("#logoText").hide();
    }
}
var title = document.getElementById("title");
var titleText = document.getElementById("titleText");
function ChangeTitle(text) {
    title.style.display = "block";
    titleText.innerHTML = text;
}
function OnStart() {
    //all code will run on load
    console.log("ready");
    ModifyHeader();
    var author = "PorkyProductions";
    var title = "PorkyProductions.io";
    var titleText = logoText.innerHTML;
    var authorText = "The PorkyProductions team";
    console.log("Header.js loaded");
    console.log(title);
    console.log(titleText);
    console.log(author);
    console.log(authorText);
}
;
var altLogotext = [
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
var mainLogoClickAmount = 0;
function changeColorOfMainLogoText() {
    var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    document.getElementById("mainLogoText").style.color = color;
    console.log(color);
    mainLogoClickAmount++;
    console.log(mainLogoClickAmount);
    if (mainLogoClickAmount === 10) {
        var color = "rgb(255,255,255)";
        var mainLogoClickAmount = 0;
    }
    else {
        console.log("🚀 ~ file: index.ts ~ line 86 ~ changeColorOfMainLogoText ~ else");
    }
    ;
}
;
