// This will be a script to scale the image on the 404 page

// Grab the image
const Hedgehog: HTMLImageElement = document.querySelector('hog');
const noHog: HTMLParagraphElement = document.querySelector('noHog');
const fourOhFour: HTMLHeadingElement = document.querySelector('404');


// Begin the scaling loop
let scale = () => {
    // Grab the width and height of the image
    const width = Hedgehog.clientWidth;
    const height = Hedgehog.clientHeight;

    // Scale the image
    Hedgehog.style.transform = `scale(${width / height})`;
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


fourOhFour.addEventListener('click', () => {
    // Make the font bigger with each click
    fourOhFour.style.fontSize = `${parseInt(fourOhFour.style.fontSize) + 1}px`;
});
