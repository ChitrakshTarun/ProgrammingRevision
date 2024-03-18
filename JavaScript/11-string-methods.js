// String Methods
// Note: Strings are immutable, meaning they cannot be changed once they are created. But you can change the value of the variable.
let name = "Chitraksh";
console.log(name);
console.log(name.length); // Length of the string
console.log(name[0]); // First character of the string
console.log(name[1]); // Second character of the string
console.log(name.toUpperCase()); // Convert string to uppercase
console.log(name.toLowerCase()); // Convert string to lowercase
console.log(name.indexOf("t")); // Index of the first occurrence of the character
console.log(name.lastIndexOf("t")); // Index of the last occurrence of the character
console.log(name.charAt(3)); // Character at the specified index
console.log(name.endsWith("h")); // Check if the string ends with the specified character
console.log(name.includes("ak")); // Check if the string includes the specified character
console.log(name.substring(1, 4)); // Extract characters from the string
console.log(name.slice(1, 4)); // Extract characters from the string from the first specified index to the second -
console.log(name.slice(2)); // Extract characters from the string to the end
console.log(name.split("t")); // Split the string into an array of substrings
console.log(name.replace("h", "H")); // Replace a specified value with another value in the string
console.log(name.repeat(5)); // Repeat the string
console.log(name.trim()); // Remove whitespace from both sides of the string
console.log(name.concat(" Tarun")); // Concatenate two strings
console.log(name[0] + " has Unicode " + name.charCodeAt(0)); // Unicode of the character at the specified index
