/*
Write a function that takes an array of numbers and returns a new array where each number is doubled.

console.log(doubleNumbers([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbers([5, 10, 15])); // Output: [10, 20, 30]
*/

//My solution
//#1
function doubleNumbers(arr) {
  return arr.map((x) => x * 2);
}
console.log(doubleNumbers([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbers([5, 10, 15])); // Output: [10, 20, 30]
