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
});
