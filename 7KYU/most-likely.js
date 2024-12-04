/*
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
*/

//My solution
//#1
function mostLikely(prob1, prob2) {
  // Convert the probabilities into fractions
  const [num1, den1] = prob1.split(":").map(Number);
  const [num2, den2] = prob2.split(":").map(Number);

  // Compare the probabilities by cross multiplication
  return num1 * den2 > num2 * den1;
}
