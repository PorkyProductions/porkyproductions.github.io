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
function generateText() {
    logoText = altLogotext[Math.floor(Math.random() * altLogotext.length)];
    console.log(logoText);
    document.getElementById("logoText").innerHTML = logoText;
}
