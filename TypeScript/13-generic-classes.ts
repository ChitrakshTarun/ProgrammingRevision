function genericFunction<T, U>(valueOne: T, valueTwo: U): object {
	return {
		valueOne,
		valueTwo,
	};
}

genericFunction(1, "2");

interface Database {
	connection: string;
	username: string;
	password: string;
}

// Using extends to ensure one of the generics follows what the interface is using
// Puts some restrictions on the generic, but useful in some cases where required.
function databaseFunction<T, U extends keyof Database>(
	valueOne: T,
	valueTwo: U
): object {
	return {
		valueOne,
		valueTwo,
	};
}

interface Test {
	name: string;
	type: string;
}

interface Course {
	name: string;
	professor: string;
	subject: string;
}

// Creating a generic class which can handle both the above interfaces
class Sellable<T> {
	public cart: T[] = [];

	addToCart(product: T) {
		this.cart.push(product);
	}
}
