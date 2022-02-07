// On the user's click, increment a counter by 1, and then store the counter in a cookie

function clickTracker(): void {
    let counter = 0;
    const page = document.getElementById("page");
    page.addEventListener("click", (): void => {
            counter++;
            document.cookie = `counter=${counter}`;
        });
}

// If the user's clicks reach a certain number, display an alert

function clickAlert(): void {
    const counter = getCookie({ _arg0: "counter" });
    if (counter === "20000") {
        alert("You have reached 20000 clicks! You are one of our top users!");
    }
}

// Get the value of the counter cookie

function getCookie({ _arg0: name }): string {
    const cookie = document.cookie;
    const cookieArray = cookie.split(";");
    const cookieValue = cookieArray[0].split("=");
    return cookieValue[1];
}

