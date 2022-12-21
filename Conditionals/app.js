const dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

if (dice >= 3) {
	console.log(`Your dice is ${dice}`);
}

// 0-7 Child -> Free
// 8-18 Student -> $10
// 19-65 Adult -> $15
// 65+ Elder -> Free

const age = prompt('Please enter your age');

if ((age >= 0 && age < 8) || age >= 65) {
	console.log('Free');
} else if (age >= 8 && age < 19) {
	console.log('$10');
} else if (age >= 19 && age < 65) {
	console.log('$15');
} else {
	console.log('Invalid age!');
}

const firstName = prompt('Enter your name');

if (!firstName) {
	prompt('Try again!');
}
