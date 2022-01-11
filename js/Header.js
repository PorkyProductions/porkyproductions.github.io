// JavaScript source code

$(document).ready(function () {
    console.log("ready");
    ModifyHeader();
})

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

let author = ("<a href='" + AUTHOR_URL + "'>" + AUTHOR_NAME + "</a>");
let authorText = document.getElementById("author");
function ChangeAuthor(text) {
    authorText.innerHTML = text;
}

console.log("Header.js loaded");
console.log (title);
console.log (titleText);
console.log (author);
console.log (authorText);