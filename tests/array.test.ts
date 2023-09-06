describe('Array', function () {
	it('should same with javascript', function () {
		const names: String[] = ['Naufal', 'Adhi', 'Ramadhan'];
		const values: Number[] = [1, 2, 3];

		console.info(names);
		console.info(values);
	});

	it('should support readonly array', function () {
		const hobbies: ReadonlyArray<string> = ['Berenang', 'Bersepeda'];
		// hobbies[0] = 'Membaca'; // error
		console.info(hobbies);
	});

	it('should support tuple', function () {
		const person: readonly [string, string, number] = ['Naufal', 'Adhi', 20];
		console.info(person[0]);
		console.info(person[1]);
		console.info(person[2]);
	});
});
