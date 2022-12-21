const toDoList = ['feed my turtle'];

let userInput = prompt('What would you like to do?');

while (userInput !== 'quit' && userInput !== 'q') {
	if (userInput === 'new') {
		let toDo = prompt('Enter new todo.');
		toDoList.push(toDo);
		console.log(`${toDo} added to the list`);
	} else if (userInput === 'list') {
		console.log('**********');
		for (let toDo of toDoList) {
			console.log(`${toDoList.indexOf(toDo)}: ${toDo}`);
		}
		console.log('**********');
	} else if (userInput === 'delete') {
		let index = parseInt(prompt('Enter index of todo to delete.'));
		const deleted = toDoList[index];

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
