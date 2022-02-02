// JavaScript Source Code
// Original Author: PorkyProductions

console.log("index.js is running");

console.log("🚀 ~ file: index.js ~ line 6 ~ document.getElementById(flyin).className = flyin.run;, document.getElementById(flyin).className = flyin.run;)" );
document.getElementById("flyin").className = "flyin.run";


// the below function needs jQuery, however, I have not yet included it in this file

function loadHide() {
    console.log("🚀 ~ file: index.js ~ line 13 ~ loadHide ~ function loadHide() is running");
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
      });
};