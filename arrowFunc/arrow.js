const person = {
	firstName: 'Leo',
	lastName: 'Kim',
	fullName: () => {
		console.log(this); // person 객체가 아닌 window 객체를 가리킴
		console.log(`${this.firstName} ${this.lastName}`);
	},
	shoutName: function () {
		setTimeout(() => {
			console.log(this); // person 객체를 가리킴
			console.log(`${this.firstName} ${this.lastName}`);
		}, 2000);
	},
};

person.fullName();

person.shoutName();
