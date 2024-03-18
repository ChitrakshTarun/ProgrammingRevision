// Q. Write a program to print the marks of a student in an object using for loop

obj = {
	Chitraksh: 90,
	Tarun: 95,
	Ankit: 85,
};

for (key in obj) {
	console.log(key + "'s marks: " + obj[key]);
}

// Q. Write a program to print try again until user enters the correct number.
// Won't work on VSCode due to prompt
/*let randomNum = Math.floor(Math.random() * 10) + 1;
let i;
while (i != randomNum) {
	i = prompt("Guess the number between 1 and 10"); 
	console.log("Try again");
}
console.log("Correct number");
*/

// Q. Write a program to print the average of 5 numbers using function
const averageOfFive = (a, b, c, d, e) => {
	return (a + b + c + d + e) / 5;
};

console.log(averageOfFive(1, 2, 3, 4, 5));
