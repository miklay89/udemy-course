let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const answers = [];

answers[0] = prompt(`What is your name?`, ``);
answers[1] = prompt(`What is your surname?`, ``);
answers[2] = +prompt(`How old are you?`, ``);

console.log(typeof(answers) );