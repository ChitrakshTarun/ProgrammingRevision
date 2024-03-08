interface Circle {
	kind: "circle";
	radius: number;
}
interface Square {
	kind: "square";
	sideLength: number;
}
interface Rectangle {
	kind: "rectangle";
	width: number;
	height: number;
}

type Shape = Circle | Square | Rectangle;

function getShape(shape: Shape) {
	if (shape.kind === "circle") {
		return Math.PI * shape.radius ** 2;
	}
	// return shape.sideLength ** 2;
}

function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "square":
			return shape.sideLength ** 2;
		case "rectangle":
			return shape.width * shape.height;
		default:
			const _defaultforshape: never = shape; // Where you should use never, this will raise when every possible case has been handled
			return _defaultforshape;
	}
}
