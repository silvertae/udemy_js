const a = [1, 12, 7, 9, 41, 22];

console.log(Math.max(a)); // NaN
console.log(Math.max(...a)); // 41

console.log(...'HELLO');

const dogs = ['Dodam', 'Siro', 'Nuru'];
const cats = ['Navi', 'Kirby'];

const pets = [...dogs, ...cats, 'Lion'];
console.log(pets);

const foo = {
	name: 'Lucy',
	age: 21,
};

const bar = {
	name: 'Rebecca',
	shout: function () {
		console.log('Ahhhhhhh');
	},
	isNum: false,
};

const obj = { ...foo, ...bar };
console.log(obj);
