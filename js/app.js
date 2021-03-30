// Declaration of a function generating a random number between 1 and 6
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// I regrouped my dice rendering and the random number generation into one big function
function newDice() {
    // I create a div
    const dice = document.createElement('div');
    // I git it the class 'dice'
    dice.className = 'dice';
    // I insert it into the DOM
    const player = document.getElementById('player');
    // Inside the 'player' div
    player.appendChild(dice);

    // I call my random number generation function and use the generated number to change the sprite background position

    let number = getRandomInt(1, 6);

    dice.style.backgroundPosition = `${700 - (number * 100)}px`
}



// I use a prompt to ask the user to input the number of dices thrown

let numberOfDice = parseInt(prompt('Combien de dés voulez vous lancer?'), 10);

// And I repeat my function as many times as necessary
if (isNaN(numberOfDice) ) {
    alert("Veuillez entrer un nombre. (Exemple: 2)")
} 
else {
for (let i = 0; i < numberOfDice; i++) {
    newDice();
} 
}
