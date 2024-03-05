// Both these syntax are valid for defining arrays in TypeScript.
const Songs: string[] = [];
const Albums: Array<string> = [];
Songs.push("Runaway");
Albums.push("MBDTF");

// Example of defining a type Person and creating an Array with that Type Alias.
type Person = {
	name: string;
	age: number;
};

const People: Array<Person> = [];
People.push({ name: "Chitraksh", age: 19 });
