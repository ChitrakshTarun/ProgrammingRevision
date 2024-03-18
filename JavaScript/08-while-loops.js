// While Loops
// Syntax: while (condition) { code to be executed while the condition is true }
let n = 10;
let i = 0;
while (i < n) {
	console.log(i);
	i++;
}

// Do While Loop
// Syntax: do { code to be executed while the condition is true } while (condition);
// The do while loop is similar to the while loop, except that the condition is tested at the end of the loop. This means that the do while loop will always execute its body at least once.
i = 11;
do {
	console.log(i);
	i++;
} while (i < n); // Condition is false, but the loop will execute at least once.
