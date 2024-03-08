// Similar to Interfaces, with some differences. Check out documentation for future info if required.
abstract class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {}
	abstract getSepia(): void;
	getPixelCount(): number {
		return 16; // Example
	}
}
/*
    // No new object can be created from this abstract class.
    // const camera = new TakePhoto("front", "sepia"); // This is invalid code
*/
class Photo extends TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public resolution: string
	) {
		super(cameraMode, filter);
	}

	getSepia(): void {
		console.log("Sepia filter applied!");
	}
}

const Click = new Photo("front", "sepia", "4k");
