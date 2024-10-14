// Write a function that takes two numbers and returns the maximum of the two

// My solution

//#1
function maxOfTwo(a, b) {
  return a > b ? a : b;
}
console.log(maxOfTwo(3, 8));
console.log(maxOfTwo(12, 8));
console.log(maxOfTwo(8, 8));

//#2
const max = (a, b) => (a > b ? a : b);
console.log(max(3, 8));
console.log(max(12, 8));
console.log(max(8, 8));
