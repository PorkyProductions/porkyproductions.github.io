// Grab the image
const Hedgehog = document.getElementById('hog');
const noHog = document.getElementById('noHog');
const fourOhFour = document.getElementById('404');
// If the mouse if hovering over the image, make it spin
Hedgehog.addEventListener('mouseover', () => {
    Hedgehog.classList.add('spin');
});
fourOhFour.addEventListener('click', () => {
    // Make the font bigger with each click
    fourOhFour.style.fontSize = `${parseInt(fourOhFour.style.fontSize) + 1}px`;
});
