import { Seller } from '../src/seller';
import { Employee, Manager } from '../src/employee';

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

	it('should support indexable interface', function () {
		interface StringArray {
			[index: number]: string;
		}

		const names: StringArray = ['Naufal', 'Adhi', 'Ramadhan'];
		console.info(names);
	});

	it('should support indexable interface for non number index', function () {
		interface StringDictionary {
			[key: string]: string;
		}

		const dictionary: StringDictionary = {
			name: 'Naufal',
			address: 'Indonesia',
		};

		expect(dictionary['name']).toBe('Naufal');
		expect(dictionary['address']).toBe('Indonesia');
	});

	it('should support extends interface', function () {
		const employee: Employee = {
			id: '1',
			name: 'Naufal',
			division: 'IT',
		};

		console.info(employee);

		const manager: Manager = {
			id: '2',
			name: 'Adhi',
			division: 'IT',
			numberOfEmployees: 10,
		};

		console.info(manager);
	});
});
