// const secretCode = 'BoobaGump';
// let answer = prompt('Enter the secret code!');
// while (answer !== secretCode) {
// 	answer = prompt('Try again!!!');
// }
// console.log('Congrats! You got the code!');

// let input = prompt('Type something');
// while (true) {
// 	input = prompt(input);
// 	if (input === 'do not copy') {
// 		break;
// 	}
// }
// console.log('You did it!!!');

let max = parseInt(prompt('Enter the maximum number'));

while (!max) {
	max = parseInt(prompt('Enter the vaild maximum number!'));
}

const targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Guess the answer'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
	if (guess === 'q') break;

	attempts++;
	if (guess > targetNum) {
		guess = prompt('Your guess is greater than answer. New guess!');
	} else {
		guess = prompt('Your guess is smaller than answer. New guess!');
	}
}

if (guess === 'q') {
	console.log("Let's quit!");
} else {
	console.log('Congrats!');
	console.log(`It took you ${attempts} guesses`);
}
