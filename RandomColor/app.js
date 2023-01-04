const btn = document.querySelector('#changeBtn');
const h1 = document.querySelector('h1');
// 충분한 길이가 되면 함수로 따로 빼주는게 좋음!
const mkRandColor = () => {
	const R = Math.floor(Math.random() * 256);
	const G = Math.floor(Math.random() * 256);
	const B = Math.floor(Math.random() * 256);
	if (R + G + B < 200) {
		h1.style.color = 'white';
	} else {
		h1.style.color = 'black';
	}
	return `rgb(${R}, ${G}, ${B})`;
};

function changeColor() {
	const newColor = mkRandColor();
	document.body.style.backgroundColor = newColor;
	h1.innerText = `Your color is ${newColor}`;
}

btn.addEventListener('click', changeColor);
