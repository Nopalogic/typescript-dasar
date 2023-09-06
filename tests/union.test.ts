describe('Union', function () {
	it('should support in javascript', function () {
		let sample: number | string | boolean = 'Nopal';
		console.info(sample);

		sample = 100;
		console.info(sample);

		sample = true;
		console.info(sample);
	});

	it('should support in javascript', function () {
		function process(value: number | string | boolean) {
			if (typeof value === 'string') {
				return value.toUpperCase();
			} else if (typeof value === 'number') {
				return value + 2;
			} else {
				return !value;
			}
		}

		expect(process('Naufal')).toBe('NAUFAL');
		expect(process(98)).toBe(100);
		expect(process(false)).toBe(true);
	});
});
