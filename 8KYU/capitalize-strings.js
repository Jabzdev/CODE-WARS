/*
Write a function that takes an array of strings and returns a new array with all the strings capitalized.

console.log(capitalizeStrings(["apple", "banana", "cherry"])); 
// Output: ["Apple", "Banana", "Cherry"]
console.log(capitalizeStrings(["dog", "cat"])); 
// Output: ["Dog", "Cat"]
*/

//My solution
//#1
function capitalizeStrings(arr) {
  return arr.map((x) => x[0].toUpperCase() + x.slice(1));
}
console.log(capitalizeStrings(["apple", "banana", "cherry"]));
// Output: ["Apple", "Banana", "Cherry"]
console.log(capitalizeStrings(["dog", "cat"]));
// Output: ["Dog", "Cat"]
