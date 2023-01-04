const form = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');
const live = document.querySelector('#live');
const h3 = document.querySelector('h3');

form.addEventListener('submit', e => {
	e.preventDefault();
	const usernameInput = form.elements.username;
	const tweetInput = form.elements.tweet;
	addTweet(usernameInput.value, tweetInput.value);
	// 입력이 끝나면 인풋창을 비워주도록
	usernameInput.value = '';
	tweetInput.value = '';
});

const addTweet = (username, tweet) => {
	const newTweet = document.createElement('li');
	const bTag = document.createElement('b');

	bTag.append(username);
	newTweet.append(bTag);
	newTweet.append(`- ${tweet}`);
	tweetContainer.append(newTweet);
};

live.addEventListener('input', () => {
	h3.innerText = `Welcome, ${live.value}`;
	if (live.value === '') h3.innerText = 'Pewwwww';
});

tweetContainer.addEventListener('click', e => {
	console.log(e);
	e.target.nodeName === 'LI' && e.target.remove();
});
