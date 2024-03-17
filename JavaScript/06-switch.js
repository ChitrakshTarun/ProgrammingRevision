// Switch Statement
let section = "B";
switch (section) {
	case "A":
		console.log("You are in section A.");
		break; // If you don't include a break statement, the switch statement will continue to execute the next case.
	case "B":
		console.log("You are in section B.");
		break;
	case "C":
		console.log("You are in section C.");
		break;
	default: // The default case is executed if none of the cases match the value of the expression.
		console.log("You are in an unknown section.");
}
