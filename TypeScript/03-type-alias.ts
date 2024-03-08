// Self defining types, which can be passed into a function similar to how we pass in a number or string.
type User = {
	readonly _id: string; // Prevents you from editing the value further down
	name: string;
	age: number;
	isStudent: boolean;
	payment?: string; // ? makes the value optional
};

function createUser(user: User): User {
	return { _id: "abc", name: "Chitraksh", age: 19, isStudent: true };
}

// Practice
type Coordinates = {
	x: number;
	y: number;
	z: number;
};

function printCoordinates(coord: Coordinates) {
	console.log(coord.x, coord.y, coord.z);
}

printCoordinates({ x: 1, y: 2, z: 3 });
