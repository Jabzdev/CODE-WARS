/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

//my solution
//#1
function explode(x) {
  let score;

  // Check if both values are numbers
  if (typeof x[0] === "number" && typeof x[1] === "number") {
    score = x[0] + x[1];
  }
  // Check if only the first value is a number
  else if (typeof x[0] === "number") {
    score = x[0];
  }
  // Check if only the second value is a number
  else if (typeof x[1] === "number") {
    score = x[1];
  }
  // If neither are numbers, return "Void!"
  else {
    return "Void!";
  }

  // Generate the array of arrays
  return Array(score).fill(x);
}
