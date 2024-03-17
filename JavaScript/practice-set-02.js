// Q. Use logical operators to find out whether the age of a person lies between 10 and 20;
let age = 19;
console.log(
	age >= 10 && age <= 20
		? "The age is between 10 and 20."
		: "The age is not between 10 and 20."
);

// Q. Demonstrate the use of switch statement in JavaScript
let course = "Maths";
switch (course) {
	case "Science":
		console.log("Course is Science.");
		break;
	case "Maths":
		console.log("Course is Maths");
		break;
	default:
		console.log("Course not identified.");
}

// Q. Write a JavaScript program to find out whether a number is divisible by 2 and 3
let num1 = 36;
if (num1 % 2 == 0 && num1 % 3 == 0) {
	console.log(num1 + " is divisible by 2 and 3.");
} else {
	console.log(num1 + " is NOT divisible by 2 and 3.");
}

// Q. Write a JavaScript program to find out whether a number is divisble by 2 or 3
let num2 = 27;
if (num1 % 2 == 0 || num1 % 3 == 0) {
	console.log(num2 + " is divisible by 2 or 3, or both.");
} else {
	console.log(num2 + " is NOT divisible by either 2 or 3.");
}

// Q. Print you can drive or you cannot drive based on age being greater than 18 using the ternary operator
console.log("You " + (age >= 18 ? "can" : "cannot") + " drive.");
