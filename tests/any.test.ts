describe('Any', function () {
	it('should support in javascript', function () {
		const person: any = {
			id: 1,
			name: 'Naufal Adhi',
			age: 20,
		};

		person.age = 19;
		person.address = 'Indonesia';

		console.info(person);
	});
});
