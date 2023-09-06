describe('Object', function () {
	it('should support in typescript', function () {
		const person: { id: string; name: string; hobbies?: string[] } = {
			id: '1',
			name: 'Naufal',
			hobbies: ['berenang'],
		};

		console.info(person);

		person.id = '2';
		person.name = 'Adhi';
    
		console.info(person);
	});
});
