// Definition of Counter

var counter = 0;

// Definitions of sounds

const beep = new Audio('audio/Beep Short .mp3');
const air_woosh = new Audio('audio/Air Woosh Underwater.mp3');
const alarm_clock = new Audio('audio/Alarm Clock.mp3');
const cartoon_boing = new Audio('audio/Cartoon Boing.mp3');
const crash = new Audio('audio/Crash .mp3');
const glass_crunch = new Audio('audio/Glass Crunch.mp3');
const glass_crush = new Audio('audio/Glass Crush.mp3');
const glass_shatters = new Audio('audio/Glass Shatters Into Debris.mp3');
const explosion_distant = new Audio('audio/Big Explosion Distant.mp3');
const explosion = new Audio('audio/Big Explosion Cut Off.mp3');

// Audio handlers

function beepHandler(): void {
    beep.play();
};

function airWooshHandler(): void {
    air_woosh.play();
};

function alarmClockHandler(): void {
    alarm_clock.play();
};

function cartoonBoingHandler(): void {
    cartoon_boing.play();
};

function crashHandler(): void {
    crash.play();
};

function glassCrunchHandler(): void {
    glass_crunch.play();
};

function glassCrushHandler(): void {
    glass_crush.play();
};

function glassShattersHandler(): void {
    glass_shatters.play();
}

function explosionDistantHandler(): void {
    explosion_distant.play();
}

function explosionHandler(): void {
    explosion.play();
}

// Main secret function

function addToCounter() {
    counter++;
    console.log(counter);
    if (counter === 1) {
        beepHandler();    
    };
    if (counter === 2) {
        airWooshHandler();
    }
    if (counter === 3) {
        alarmClockHandler();
    }
    if (counter === 4) {
        cartoonBoingHandler();
    }
    if (counter === 5) {
        crashHandler();
    }
    if (counter === 6) {
        glassCrunchHandler();
    }
    if (counter === 7) {
        glassCrushHandler();
    }
    if (counter === 8) {
        glassShattersHandler();
    }
    if (counter === 9) {
        explosionDistantHandler();
    }
    if (counter === 10) {
        explosionHandler();
        alert(congratsLibrary[Math.floor(Math.random() * congratsLibrary.length)]);
        console.log(congratsLibrary[Math.floor(Math.random() * congratsLibrary.length)]);
        counter = 0;
    }
};

// Library of congradulations

const congratsLibrary = [
    "You are awesome!",
    "You are great!",
    "You are amazing!",
    "You are so smart!",
    "You are so talented!",
    "You are so awesome!",
    "You are so great!",
    "You are so amazing!",
    "WOAH, you are a secret agent!",
    "You are a secret agent!",
    "You are a secret!",
    "WOAH! That means you either read the source code, or you're really curious. Either way, we <3 you!",
    "SUP COOL PERSON!",
    "WOW LOOK AT YOU"

];
