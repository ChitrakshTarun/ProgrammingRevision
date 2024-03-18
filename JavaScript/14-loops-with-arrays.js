let num = [23, 3, 2004, 1989, 2019, 2020];

// For loop with an array
for (let i = 0; i < num.length; i++) {
	console.log(num[i]);
}

// Using forEach
num.forEach(function (element) {
	console.log(element);
});

// Array.from
let name = "Chitraksh";
let nameArray = Array.from(name);
console.log(nameArray);

// for of
for (let i of num) {
	console.log(i);
}

// for in
for (let i in num) {
	console.log(num[i]);
}
