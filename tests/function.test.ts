describe('Function', function () {
	it('should suppport in typescript', function () {
		function sayHello(name: string): string {
			return `Hello, ${name}`;
		}

		expect(sayHello('Naufal')).toBe('Hello, Naufal');

		function printHello(name: string): void {
			console.info(`Hello ${name}`);
		}

		printHello('Naufal');
	});
});
