var counter = 0;

function addToCounter() {
    counter++;
    console.log(counter);
    if (counter === 10) {
        alert(congratsLibrary[Math.floor(Math.random() * congratsLibrary.length)]);
        console.log(congratsLibrary[Math.floor(Math.random() * congratsLibrary.length)]);
    };
};

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
