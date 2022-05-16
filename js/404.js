// This will be a script to scale the image on the 404 page
// Grab the image
const Hedgehog = document.querySelector('hog');
const noHog = document.querySelector('noHog');
const fourOhFour = document.querySelector('404');
// If the mouse if hovering over the image, make it spin

Hedgehog.addEventListener('mouseover', () => {
    Hedgehog.classList.add('spin');
});

fourOhFour.addEventListener('click', () => {
    // Make the font bigger with each click
    fourOhFour.style.fontSize = `${parseInt(fourOhFour.style.fontSize) + 1}px`;
});
