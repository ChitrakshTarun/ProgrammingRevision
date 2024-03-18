// Map Filter Reduce are Higher Order Array Methods

// Map
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// Syntax: let newArray = arr.map((value, index, array) => {code frfr})
let arr1 = [1, 2, 3, 4, 5];
let newArray1 = arr1.map((value) => {
	return value * 2;
});
console.log(newArray1);

// Filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: let newArray = arr.filter((value, index, array) => {code})
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray2 = arr2.filter((value) => {
	return value > 5;
});
console.log(newArray2);

// Reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax: let newArray = arr.reduce((accumulator, value, index, array) => {code}, initialValue)
// In the example below, take 1 and 2, add them get 3, take 3 and add with 3 get 6, take 6 and add with 4 get 10, take 10 and add with 5 get 15
let arr3 = [1, 2, 3, 4, 5];
let newArray3 = arr3.reduce((accumulator, value) => {
	return accumulator + value;
}, 0);
console.log(newArray3);

// Can also define the function separately and call it in the reduce method
let arr4 = [1, 2, 3, 4, 5];
let sum = (accumulator, value) => {
	return accumulator + value;
};
let newArray4 = arr4.reduce(sum);
console.log(newArray4);
