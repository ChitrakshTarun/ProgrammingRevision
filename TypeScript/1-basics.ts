// Variable Definition & Type Inference
// let variablename: type = value;
let username: string = "Chitraksh";
let age: number = 10;
let isStudent: boolean = true;
// This is too obvious to do. Age will be a number, name will be a string. Don't overuse TypeScript.
// If you're assigning the value at the time of declaration, TypeScript will automatically infer the type.

let test: string;
function getTest() {
	return "Hello";
}
test = getTest();
// Good practice to use the type here, because it's not being assigned a value at the time of declaration.

console.log(name);
