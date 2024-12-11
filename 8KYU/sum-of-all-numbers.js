/*
Write a function that takes an array of numbers and returns the sum of all the numbers.

console.log(sumNumbers([1, 2, 3, 4])); // Output: 10
console.log(sumNumbers([5, 5, 5, 5])); // Output: 20
*/

//My solution
//#1
function sumNumbers(arr) {
  return arr.reduce((x, b) => x + b, 0);
}

console.log(sumNumbers([1, 2, 3, 4])); // Output: 10
console.log(sumNumbers([5, 5, 5, 5])); // Output: 20
