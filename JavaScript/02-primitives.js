// 7 Primitive Data Types in JavaScript: Number, Null, Boolean, BigInt, String, Symbol, Undefined
// Remember as NNBBSSU
let a = null;
let b = 2303;
let c = true;
let d = 1234567890123456789012345678901234567890n;
let e = "Hello, World!";
let f = Symbol("This is a symbol");
let g = undefined; // Can also declare this as 'let g;' without specifying the undefined value. CANNOT DO THIS WITH NULL.

// To print the type of a variable, use the typeof operator
console.log(typeof a); // object
console.log(typeof b); // number
console.log(typeof c); // boolean
console.log(typeof d); // bigint
console.log(typeof e); // string
console.log(typeof f); // symbol
console.log(typeof g); // undefined
