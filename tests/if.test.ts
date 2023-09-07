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

		console.info(status);
	});

	it('should support switch statement', function () {
		function sayHello(name: string): string {
			switch (name) {
				case 'Naufal':
					return 'Hello, Naufal';
				case 'Adhi':
					return 'Hello, Adhi';
				default:
					return 'Hello';
			}
		}

		console.info(sayHello('Naufal'));
		console.info(sayHello('Adhi'));
		console.info(sayHello('Ramadhan'));
	});
});
