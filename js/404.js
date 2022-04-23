// This will be a script to scale the image on the 404 page
// Grab the image
var Hedgehog = document.querySelector('hog');
var noHog = document.querySelector('noHog');
var fourOhFour = document.querySelector('404');
// Begin the scaling loop
var scale = function () {
    // Grab the width and height of the image
    var width = Hedgehog.clientWidth;
    var height = Hedgehog.clientHeight;
    // Scale the image
    Hedgehog.style.transform = "scale(".concat(width / height, ")");
    requestAnimationFrame(scale);
};
// Begin the scaling loop
if (Hedgehog) {
    scale();
}
else {
    console.log('Hedgehog not found');
    noHog.innerHTML = 'Hedgehog not found';
}
fourOhFour.addEventListener('click', function () {
    // Make the font bigger with each click
    fourOhFour.style.fontSize = "".concat(parseInt(fourOhFour.style.fontSize) + 1, "px");
});
