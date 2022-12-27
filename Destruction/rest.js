const scores = [100, 97, 88, 72, 63];

const [first, second, ...everyoneElse] = scores;

console.log(first, second, everyoneElse);

const user = {
	firstName: 'Leo',
	lastName: 'Kim',
	age: 26,
	born: 1997,
	city: 'Seoul',
	email: 'leo0529@naver.com',
};

const { firstName, born: bornYear, city, state = 'N/A' } = user;
console.log(firstName, bornYear, state);

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

// console.log(movies.filter(movie => movie.score > 90));
console.log(movies.filter(({ score }) => score > 90));

// const goodMovies = movies.map(movie => {
// 	return `${movie.title} is rated ${movie.score}`;
// });
const goodMovies = movies.map(({ title, score }) => {
	return `${title} is rated ${score}`;
});
console.log(goodMovies);
