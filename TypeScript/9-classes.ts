// Similar to what you've studied in C++/Python. Understand what TypeScript does diff vs JavaScript.

class User {
	// Make sure TypeScript is aware of 'email' and 'name' in advance in this example, to avoid issues in the constructor.
	name: string; // Anything not marked with a modifier is automatically public in TypeScript.
	age: number;
	email: string;
	location: string = "";
	private pincode: number; // Private. This makes the variable inaccessible. I cannot call Chitraksh.pincode later on.
	constructor(name: string, age: number, email: string, pincode: number) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.pincode = pincode; // Can still access it in the constructor.
	}
}

// New user
const Chitraksh = new User("chitraksh", 19, "chitrakshtarun@gmail.com", 999999);
// Can still access location, even if not defined in the constructor. However the location value - if set - must be a string.
Chitraksh.location = "India";

// Better way to define
class User2 {
	// Automatically assigns the values to the class properties by defining it inside the constructor itself. Avoids the this.[] syntax.
	constructor(
		public name: string,
		public age: number,
		public email: string,
		private pincode: number
	) {}
}

// New user
const Chitraksh2 = new User2(
	"chitraksh",
	19,
	"chitrakshtarun@gmail.com",
	999999
);
