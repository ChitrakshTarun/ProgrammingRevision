// Lets you assign multiple possible types. Useful when you don't know whether the value will be one of multiple types.
// Better practice than using any. But try and keep it as strict as possible.

let userID: string | number;
// Cannot directly apply stuff like .toLowerCase on this since it's both string & number. Must check type first.
function lowercaseID(userID: string | number) {
	if (typeof userID === "string") {
		return userID.toLowerCase();
	}
	return userID;
}

// Can also use custom defined types.

type RegularUser = {
	name: string;
	age: number;
};

type AdminUser = {
	name: string;
	age: number;
	role: string;
};

// Initialisation as RegularUser.
let user: RegularUser | AdminUser = { name: "Chitraksh", age: 19 };
// Changing to AdminUser.
user = { name: "Chitraksh", age: 19, role: "Admin" };

// Defining arrays containing multiple types

let mixedArray: (string | number)[] = [1, 2, "a", "b"];
// Below is wrong since it is either an all string array or all number array.
// let mixedArray: string[] | number[] = [1, 2, "a", "b"];

// Allowing only a certain set of values.
let pet: "dog" | "cat" | "bird";
