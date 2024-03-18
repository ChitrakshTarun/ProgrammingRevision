// Array methods - not exhaustve. Check documentation as and when required
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5 | This is a string
console.log(numbers.join("*")); // 1*2*3*4*5 | This is a string

numbers.pop(); // Removes the last element
console.log(numbers); // [1, 2, 3, 4]
numbers.push(5); // Adds a new element to the end
console.log(numbers); // [1, 2, 3, 4, 5]

let poppedElement = numbers.pop(); // Removes the last element and returns it
console.log(poppedElement); // 5
console.log(numbers); // [1, 2, 3, 4]
let pushedElement = numbers.push(5); // Adds a new element to the end and returns the new length
console.log(pushedElement); // 5
console.log(numbers); // [1, 2, 3, 4, 5]

numbers.shift(); // Removes the first element
console.log(numbers); // [2, 3, 4, 5]
numbers.unshift(1); // Adds a new element to the beginning
console.log(numbers); // [1, 2, 3, 4, 5]

/*
delete numbers[2]; // Removes the element at index 2. It leaves an empty space in the array.
console.log(numbers); // [1, 2, empty, 4, 5]
*/
let numbers2 = [6, 7, 8, 9, 10];

let newArray = numbers.concat(numbers2); // Concatenates two arrays
console.log(newArray, numbers, numbers2);

/* 
=====================
*/

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the elements of an array alphabetically, for numbers converts the numbers into strings

// Can also pass a function into sort to have it be used as the basis to compare
let points = [40, 100, 1, 5, 25, 10];
console.log(
	points.sort(function (a, b) {
		return a - b;
	})
);
// How this example works: 40 and 100 are compared, 40 - 100 = -60, so 40 is sorted before 100... and so on.
console.log(points.reverse()); // Reverses the order of the elements in an array

// Syntax for splice: array.splice(index, howmanytobedeleted, item1, ....., itemX), returns deleted items
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Adds "Feb" at index 1

// Slice: array.slice(start, end), returns a new array
let months2 = months.slice(1, 3); // Returns ["Feb", "March"]
