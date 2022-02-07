function SecretHeart() {
    var counter = 0;
    var heart = $("#FooterHeart").$("svg");
    heart.addEventListener("click", function() {
        counter++;
        console.log(counter);
        if (counter === 10) {
            alert("This means you either read the source code, or are just super curious, either way, we <3 you!");
        }
    });
}
