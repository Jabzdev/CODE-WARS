/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

//My solution
//#1
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return []; // Handle special cases

  let countPositives = 0; // Count of positive numbers
  let sumNegatives = 0; // Sum of negative numbers

  input.forEach((num) => {
    if (num > 0) countPositives++; // Increment for positives
    else if (num < 0) sumNegatives += num; // Add for negatives
  });

  return [countPositives, sumNegatives]; // Return the result
}
