export interface Seller {
	id: number;
	name: string;
	address?: string;
	// readonly properties
	readonly nip: string;
	readonly npwp: string;
}
