// On the user's click, increment a counter by 1, and then store the counter in a cookie
function clickTracker() {
    var counter = 0;
    var page = document.getElementById("page");
    page.addEventListener("click", function () {
        counter++;
        document.cookie = "counter=".concat(counter);
        console.log(counter);
    });
}
// If the user's clicks reach a certain number, display an alert
function clickAlert() {
    var counter = getCookie({ _arg0: "counter" });
    if (counter === "20000") {
        alert("You have reached 20000 clicks! You are one of our top users!");
    }
}
// Get the value of the counter cookie
function getCookie(_a) {
    var name = _a._arg0;
    var cookie = document.cookie;
    var cookieArray = cookie.split(";");
    var cookieValue = cookieArray[0].split("=");
    return cookieValue[1];
}
