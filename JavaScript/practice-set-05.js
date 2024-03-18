// Q. Create an array of numbers, take input from the user and add that number to the array.
let arr = [1, 2, 3, 4, 5];
// arr.push(prompt("Enter a number: "));
console.log(arr);

// Q. Filter for a number divisible by 10 from a given array
let arr1 = [1, 10, 20, 33, 43, 50, 110];
let newArray = arr1.filter((value) => {
	return value % 10 == 0;
});
console.log(newArray);

// Q. Create an array of square of a given numbers
let newArray2 = arr.map((n1) => {
	return n1 ** 2;
});
console.log(newArray2);

let factorial = arr.reduce((n1, n2) => {
	return n1 * n2;
});

console.log(factorial);
