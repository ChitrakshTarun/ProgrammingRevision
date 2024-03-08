function detectTypes(val: number | string) {
	if (typeof val === "string") {
		return val.toLowerCase;
	}
	return val + 3;
}
// Now what if it is an array of numbers?

// Being extra cautious here to ensure that null is included too if there's no ID
function provideID(id: string | null) {
	if (!id) {
		console.log("Please provide your ID!");
		return;
	}
	id.toLowerCase();
}

// Example from Documentation
/* 
We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.

TypeScript doesn’t hurt us here at all, but this behavior is worth noting if you’re less familiar with JavaScript. TypeScript can often help you catch bugs early on, but if you choose to do nothing with a value, there’s only so much that it can do without being overly prescriptive. If you want, you can make sure you handle situations like these with a linter.
*/
function printAll(strs: string | string[] | null) {
	if (strs) {
		if (typeof strs === "object") {
			for (const s of strs) {
				console.log(s);
			}
		} else if (typeof strs === "string") {
			console.log(strs);
		}
	}
}
