const getUserChoice = userInput => {'rock', 'paper','scissors'

userInput = userInput.toLowerCase();

if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
  return userInput;
} else {
  console.log('Error!');
}
};
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}
};
console.log(getComputerChoice());
