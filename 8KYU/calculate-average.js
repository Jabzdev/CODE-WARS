/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

//My solution
//#1
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  const sum = array.reduce((acc, num) => acc + num, 0);

  return sum / array.length;
}

//#2
const findAverage = (array) =>
  array.length === 0 ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
