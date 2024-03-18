// Q. Extract the amount out of this string
let string = "Please give Rs 1000";
let amount = Number.parseInt(string.slice("Please give Rs ".length)); // You are slicing the portion of the string which doesn't contain the amount
console.log(amount);
