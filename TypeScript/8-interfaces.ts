// Similar to Type, but has it's key differences.
interface Student {
	name: string;
	age: number;
	startDegree: () => string;
	// Can also use stardDegree(): string;
}

// Adding more properties to the interface, in a different block of code.
// Called 'Re-opening of the Interface'
interface Student {
	degree: string;
}

const myStudent: Student = {
	name: "Chitraksh",
	age: 19,
	startDegree: () => {
		return "Started Degree!";
	},
	degree: "CS",
};

// Allows inheritance
interface ResearchStudent extends Student {
	role: "Head" | "Professor";
}

const ResearchStudent = {
	name: "Chitraksh",
	age: 19,
	startDegree: () => {
		return "Started Degree!";
	},
	degree: "CS",
	role: "Head",
};
