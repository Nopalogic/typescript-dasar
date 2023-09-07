describe('If Statement', function () {
	it('should support in typescript', function () {
		const value = 85;

		if (value > 80) {
			console.info('Good');
		} else if (value > 60) {
			console.info('Not Bad');
		} else {
			console.info('Try Again');
		}
	});

	it('should support ternary operator', function () {
		const value = 80;
		const status = value >= 75 ? 'Passed' : 'Failed';

    console.info(status)
	});
});
