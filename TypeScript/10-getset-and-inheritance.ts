// Sometimes asked in interviews where expertise in TypeScript is important.
class Employee {
	private _courseCount: number = 0;
	protected phone: number;
	constructor(
		public name: string,
		public age: number,
		public email: string,
		public pincode: number
	) {}

	// Example getter method
	get getPincode(): number {
		return this.pincode;
	}
	// Example setter method.
	set setPincode(pin: number) {
		// Don't assign a type to the setter like set setExample(): type {}
		this.pincode = pin;
	}
	// Reverting a private counter here
	get getCourseCount(): number {
		return this._courseCount;
	}
	set setCourseCount(count: number) {
		if (count < 1) {
			throw new Error("Must register for at least one course!");
		}
		this._courseCount = count;
	}
}

class Teacher extends Employee {
	isHOD: boolean;
	// Can access protected element here.
	changePhoneNumber() {
		this.phone = 1234567890;
	}
}
