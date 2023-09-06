export enum CustomerType {
	// REGULAR,
	// PREMIUM,
	// PLATINUM,
  
  // enum sebagai string
	REGULAR = 'REGULAR',
	PREMIUM = 'PREMIUM',
	PLATINUM = 'PLATINUM',

}

export type Customer = {
	id: number;
	name: string;
	type: CustomerType;
};
