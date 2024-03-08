// Defined inside <>. Kind of like a variable but for assignable types.
const arrayNumber: Array<number> = [];
const arrayString: Array<string> = [];

// Whatever is the type of the argument, the return type will be the same.
// This is kind of like OOP's templates
function identity<T>(arg: T): T {
	return arg;
}

// Also works with interfaces
interface Phone {
	brand: string;
	model: string;
	osVersion: number;
}

function identityPhone<T>({}): T {
	return {} as T;
}

function searchProducts<T>(products: T[]): T {
	// Database operation going on here
	return products[100];
}

// Convert to Arrow Functions
const searchProductsArrow = <T>(products: T[]): T => {
	// Database beep boop
	return products[100];
};
