function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
	// By using the pet is Fish syntax in the function signature, TypeScript understands that if the isFish function returns true, then the type of pet inside the if block will be narrowed down to Fish.
	return (pet as Fish).swim() !== undefined; // Pet is a fish, it has a method of swim so it is not undefined
}

function getFood(pet: Fish | Bird) {
	if (isFish(pet)) {
		pet; // TypeScript still doesn't know if it's a bird or a fish here
		return "Fish Food";
	} else {
		pet; // " "
		return "Bird Food";
	}
}
