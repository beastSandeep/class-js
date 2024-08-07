let winningNumber = 30;
let userGuess = +prompt("Guess a number in butween 1 to 100");

if (userGuess > 100 && userGuess < 1) {
  console.log("Invalid Number");
}

if (userGuess === winningNumber) {
  console.log("Your guess is right!");
} else {
  if (userGuess < winningNumber) {
    console.log("Your guess is low");
  } else {
    console.log("Your guess is high");
  }
}
