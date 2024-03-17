// Operators in JavaScript

// 1. Arithmetic Operators
let a = 10;
let b = 4;
console.log("a + b = ", a + b); // Addition
console.log("a - b = ", a - b); // Subtraction
console.log("a * b = ", a * b); // Multiplication
console.log("a / b = ", a / b); // Division Does not work like C, will return float value.
console.log("a ** b = ", a ** b); // Exponential
console.log("a % b = ", a % b); // Returns remainder
console.log("a++ = ", a++); // This will keep the same value, but will increment the value of a after the statement is executed.
console.log("a after increment", a);
console.log("a-- = ", a--); // This will keep the same value, but will decrement the value of a after the statement is executed.
console.log("a after decrement", a);
console.log("++a = ", ++a); // This will increment the value of a and then return the value of a.
console.log("--a = ", --a); // This will decrement the value of a and then return the value of a.

// 2. Assignment Operators
let a1 = 10;
let a2 = 10;
let a3 = 10;
let a4 = 10;
let a5 = 10;
let a6 = 10;
let a7 = 10;
a1 += 5;
console.log(a1); // 15
a2 -= 5;
console.log(a2); // 5
a3 *= 5;
console.log(a3); // 50
a4 /= 5;
console.log(a4); // 2
a5 %= 5;
console.log(a5); // 0
a6 **= 5;
console.log(a6); // 100000

// 3. Comparison Operators
let x = 10;
let y = 20;
console.log("x == y", x == y); // Compares the values. Returns true if the values are equal.
console.log("x === y", x === y); // Compares the values and the types. Returns true if the values and the types are equal.
console.log("x != y", x != y); // Compares the values. Returns true if the values are not equal.
console.log("x !== y", x !== y); // Compares the values and the types. Returns true if the values and the types are not equal.
console.log("x > y", x > y); // Returns true if x is greater than y.
console.log("x < y", x < y); // Returns true if x is less than y.
console.log("x >= y", x >= y); // Returns true if x is greater than or equal to y.
console.log("x <= y", x <= y); // Returns true if x is less than or equal to y.
console.log(x == y ? "x is equal to y" : "x is not equal to y"); // Ternary Operator

// 4. Logical Operators
let p = true;
let q = false;
console.log("p && q", p && q); // Returns true if both p and q are true.
console.log("p || q", p || q); // Returns true if either p or q is true.
console.log("!p", !p); // Returns false if p is true.
console.log("!q", !q); // Returns true if q is false.
