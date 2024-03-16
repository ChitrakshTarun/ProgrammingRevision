// var vs let vs const keyword
var a = 10; // Avoid using var keyword. Global scoped. If I use var a in global scope and a function (or any block) it'll point at the same variable.
let b = 20; // Block scoped. If I use a let b in global scope and a function (or any block) it'll point at different variables.
const c = 30; // Block scoped. It's a constant; It can't be reassigned. Must be initialized at the time of declaration.
