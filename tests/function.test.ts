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

	it('should support default value', function () {
		function sayHello(name: string = 'Guest'): string {
			return `Hello, ${name}`;
		}

		expect(sayHello()).toBe('Hello, Guest');
		expect(sayHello('Naufal')).toBe('Hello, Naufal');
	});

	it('should support rest parameter', function () {
		function sum(...values: number[]): number {
			let total = 0;
			for (const value of values) {
				total += value;
			}
			return total;
		}

		expect(sum(1, 2, 3)).toBe(6);
	});

	it('should support optional parameter', function () {
		function sayHello(firstName: string, lastName?: string): string {
			if (lastName) {
				return `Hello ${firstName} ${lastName}`;
			} else {
				return `Hello ${firstName}`;
			}
		}

		expect(sayHello('Naufal')).toBe('Hello Naufal');
		expect(sayHello('Naufal', 'Adhi')).toBe('Hello Naufal Adhi');
	});

	it('should support function overloading', function () {
		function callMe(value: number): number;
		function callMe(value: string): string;
		function callMe(value: any) {
			if (typeof value === 'string') {
				return value;
			} else if (typeof value === 'number') {
				return value;
			}
		}

		expect(callMe(100)).toBe(100);
		expect(callMe('Naufal')).toBe('Naufal');
	});
});
