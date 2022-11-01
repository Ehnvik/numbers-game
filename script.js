//Player one
let playerOneInput = document.querySelector("#player-one-input");
let playerOneButton = document.querySelector("#player-one-button");
let playerOneContainer = document.querySelector("#container-player-one");

//Player two
let playerTwoInput = document.querySelector("#player-two-input");
let playerTwoButton = document.querySelector("#player-two-button");
let playerTwoContainer = document.querySelector("#container-player-two");
playerTwoContainer.style.display = "none";

//result
let printWrongResult = document.querySelector("#wrong-result");
let printCorrectResult = document.querySelector("#correct-result");

// Lives left
let showLivesLeft = document.querySelector("#lives-left");
let showLivesLeftVictory = document.querySelector("#lives-left-victory");

//restart
let restartButton = document.querySelector("#restart-button");
restartButton.style.display = "none";

answer = 0;

function playerOneAnswer() {
  answer = parseInt(playerOneInput.value);

  if (answer === 0 || answer > 10) {
    printWrongResult.innerHTML = "Vänligen fyll i ett nummer mellan 1 - 10!";
  } else {
    printWrongResult.innerHTML = "";
    playerOneContainer.style.display = "none";
    playerTwoContainer.style.display = "block";
    alert(`Du har valt nummber: ${answer}`);
  }

  playerOneInput.value = "";
}

playerOneButton.addEventListener("click", playerOneAnswer);

lives = 3;

function playerTwoGuess() {
  guess = parseInt(playerTwoInput.value);
  playerTwoInput.value = "";

  if (guess === answer) {
    printCorrectResult.innerHTML = `Grattis! ${answer} är rätt svar.`;
    printWrongResult.innerHTML = "";
    playerTwoContainer.style.display = "none";
    showLivesLeft.style.display = "none";
    restartButton.style.display = "block";
    if (lives === 3) {
      showLivesLeftVictory.innerHTML =
        "Snyggt! Du gissade rätt nummer på första försöket.";
    }
    restartButton.addEventListener("click", () => {
      location.reload();
    });
  } else if (guess > answer && guess < 11) {
    printWrongResult.innerHTML = `Nummer ${guess} är för högt. försök igen!`;
  } else if (guess === 0 || guess > 10) {
    printWrongResult.innerHTML = "Vänligen fyll i ett nummer mellan 1 - 10!";
  } else if (guess > 10) {
    printWrongResult.innerHTML = "Vänligen fyll i ett nummer mellan 1 - 10!";
  } else {
    printWrongResult.innerHTML = `Nummer ${guess} är för lågt. försök igen!`;
  }
  if (guess !== answer) {
    --lives;
    showLivesLeft.innerHTML = `Du har ${lives} försök kvar.`;
  }
  if (lives < 1) {
    playerTwoContainer.style.display = "none";
    printWrongResult.innerHTML = "Spelet slut!";
    showLivesLeftVictory.innerHTML = `Rätt svar var nummer ${answer}.`;
    restartButton.style.display = "block";
    restartButton.addEventListener("click", () => {
      location.reload();
    });
  }
}

playerTwoButton.addEventListener("click", playerTwoGuess);
