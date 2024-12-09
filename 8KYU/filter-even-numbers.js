/*
Write a function that takes an array of numbers and returns a new array containing only the even numbers.

console.log(filterEvenNumbers([1, 2, 3, 4])); // Output: [2, 4]
console.log(filterEvenNumbers([10, 15, 20])); // Output: [10, 20]
*/

//My solution
//#1
function filterEvenNumbers(arr) {
  return arr.filter((x) => x % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4])); // Output: [2, 4]
console.log(filterEvenNumbers([10, 15, 20])); // Output: [10, 20]
