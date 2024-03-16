// Q. Create a variable of type string and add a number to it.
let a = "Chitraksh";
let b = 19;
console.log(a + b); // This adds the number as a string to the string. It doesn't add the number to the string.

// Q. Use typeof operator to find the datatype of the string in the last question.
console.log(typeof (a + b)); // string

// Q. Create a const object in JavaScript and try to change a value inside it.
const person = {
	name: "Chitraksh",
	age: 19,
	isStudent: true,
};
// person = 20; // This will throw an error because we can't reassign a constant variable.
person.isStudent = false; // This will work because we are not reassigning the object, we are just changing the value of a property inside the object.

// Q. Create a dictionary of 5 words
const dict = {
	word1: "Apple",
	word2: "Banana",
	word3: "Cat",
	word4: "Dog",
	word5: "Elephant",
};
console.log(dict.word1); // This syntax is valid
console.log(dict["word2"]); // This syntax is also valid
