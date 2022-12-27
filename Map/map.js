const ary = [1, 2, 3, 4, 5, 6, 7];

const newAry = ary.map(function (n) {
	return n * 3;
});

console.log(newAry);

const movies = [
	{
		title: 'Cinema Paradiso',
		score: 99,
	},
	{
		title: 'Knvies Out - Glass Onion',
		score: 90,
	},
	{
		title: 'Parasite',
		score: 95,
	},
	{
		title: 'Everything, Everywhere, All at Once',
		score: 97,
	},
];

// const titles = movies.map(function (movie) {
// 	return movie.title.toUpperCase();
// });
const titles = movies.map(movie => movie.title.toUpperCase());

console.log(titles);

const greet = name => {
	return `Hey ${name}!`;
};

console.log(greet('Leo'));
