// For Loops
// Syntax: for (initialization; condition; increment) { code to be executed while the condition is true }
for (let i = 1; i <= 20; i++) {
	console.log(i);
}

// Can also run for loops for all object properties
let marks = {
	physics: 90,
	chemistry: 80,
	maths: 85,
};
let totalMarks = 0;
for (let key in marks) {
	console.log(key + " : " + marks[key]);
}
for (let key in marks) {
	totalMarks += marks[key];
}
console.log("Total marks = " + totalMarks);

// for in vs for of loops

// The JavaScript for (..in) statement loops through the enumerable properties of an object. The loop will iterate over all enumerable properties of the object itself and those the object inherits from its constructor’s prototype.
let obj = {
	name: "John",
	age: 25,
	city: "New York",
};

for (let key in obj) {
	console.log(obj[key]);
}

// This for (..of) statement lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more. It calls a custom iteration hook with instructions to execute on the value of each property of the object.
let arr = [3, 5, 7];

for (let i of arr) {
	console.log(i);
}
