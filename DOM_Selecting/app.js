// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
// 	console.log(
// 		(img.src =
// 			'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'),
// 	);
// }

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
	img.src =
		'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
}
