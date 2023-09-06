export type ID = string | number; // type alias untuk union type

export type Category = {
	id: ID;
	name: string;
	description?: string; // optional properties
};

export type Product = {
	id: ID;
	name: string;
	price: number;
	category: Category;
	description?: string;
};
