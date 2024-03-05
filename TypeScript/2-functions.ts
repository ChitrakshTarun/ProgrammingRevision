// Mindset behind how functions should be used in TypeScript.

// Bad way of defining, num is set to any.
function addFive(num) {
	return num + 5;
}
addFive(10);

// Good way of defining, num is set to number.
function addFiveTS(num: number) {
	return num + 5;
}
addFiveTS(5);

// Bad way of defining, val is set to any.
function getUpper(val) {
	return val.toUpperCase();
}
getUpper(4);

// Good way of defining, val is set to string.
function getUpperTS(val: string) {
	return val.toUpperCase();
}
getUpperTS("hello");
// Good way of defining a function with multiple arguments.
function signUp(name: string, age: number, email: string) {}
signUp("Chitraksh", 19, "example@gmail.com");

// Example of arrow functions and default values
let add = (a: number, b: number = 1) => {
	a + b;
};

// Example of assigning type to what value can be returned into the function.
function getUpperTSString(val: string): string {
	return val.toUpperCase();
}

// Good practice to explicitly mention void here, even though TypeScript will assign it automatically.
function consoleError(message: string): void {
	console.log(message);
}

// Function that never returns anything.
function handleError(message: string): never {
	throw new Error(message);
}
