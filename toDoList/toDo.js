//  prompt and similar functions like alert block the browser - they prevent rendering until the pop-up box has been submitted or canceled. So use setTimeOut()
setTimeout(() => {
	const toDoList = ['feed my turtle'];

	let userInput = prompt('What would you like to do?');
	// &&를 쓰는 이유는 input값이 quit 와 q가 둘 다 아니여야 반복되기 때문에
	while (userInput !== 'quit' && userInput !== 'q') {
		if (userInput === 'new') {
			let toDo = prompt('Enter new todo.');
			toDoList.push(toDo);
			console.log(`${toDo} added to the list`);
		} else if (userInput === 'list') {
			console.log('**********');
			// for문으로도 가능하지만 for ...of 사용해봄
			for (let toDo of toDoList) {
				console.log(`${toDoList.indexOf(toDo)}: ${toDo}`);
			}
			console.log('**********');
		} else if (userInput === 'delete') {
			let index = parseInt(prompt('Enter index of todo to delete.'));
			const deleted = toDoList[index];
			// Number.isNaN() 은 오직 NaN일 때만 true 출력! 따라서 NaN이 아닐 때를 구분 가능
			if (!Number.isNaN(index)) {
				toDoList.splice(index, 1);
				console.log(`${deleted} is deleted from the list.`);
			} else {
				console.log('Invalid index');
			}
		} else {
			console.log('please enter a vaild input');
		}

		userInput = prompt('What would you like to do?');
	}

	console.log('You are quit. GoodBye!');
});
