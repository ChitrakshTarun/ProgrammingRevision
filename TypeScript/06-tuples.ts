// Definition of tuple
type rgb = [number, number, number];
// Order of array matters.
const color: rgb = [255, 0, 0];
// Issue with typles is you can push more values than defined.
color.push(1984);
