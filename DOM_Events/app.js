const btn = document.querySelector('#v2');

btn.onclick = function () {
	console.log('You clicked me!');
};

function scream() {
	console.log('AAAAHHHHHHH');
	console.log('Do not touch me!');
}
btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
	console.log('You clicked me!');
});
