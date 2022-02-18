// If the id "FooterHeart" is clicked 10 times by the user, show an alert

var counter = 0;

function SecretHeart(): void {
    let id = "FooterHeart";
    let heart = document.getElementById("FooterHeart");
    heart.addEventListener("click", function () {
        counter++;
        if (counter === 10) {
            alert("This means you either read the source code, or are just super curious, either way, we <3 you!");
        }
    });
}
