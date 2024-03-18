function findAverage(a, b) {
	console.log("Average of " + a + " and " + b + " = " + (a + b) / 2);
}

findAverage(10, 20);

// Same function as arrow function
// Syntax: let function_name = (parameters) => { code to be executed }
let findAverageArrow = (a, b) => {
	console.log(
		"Average of " +
			a +
			" and " +
			b +
			" = " +
			(a + b) / 2 +
			", but I used an arrow function."
	);
};

findAverageArrow(10, 20);
