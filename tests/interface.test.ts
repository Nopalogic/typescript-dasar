import { Seller } from '../src/seller';

describe('Interface', function () {
	it('should support in typescript', function () {
		const seller: Seller = {
			id: 1,
			name: 'Asep Surasep',
			nip: '123456',
			npwp: '224466',
		};

		console.info(seller);
	});

	it('should support function interface', function () {
		interface addFunction {
			(x: number, y: number): number;
		}

		const add: addFunction = (x: number, y: number): number => {
			return x + y;
		};

		expect(add(5, 5)).toBe(10);
	});
});
