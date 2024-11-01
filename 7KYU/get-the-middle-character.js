/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.

Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

//My solution
//#1
function getMiddle(s) {
  const length = s.length;
  const middle = Math.floor(length / 2); // Calculate the middle index

  // If the length is odd, return the middle character
  if (length % 2 !== 0) {
    return s[middle];
  }
  // If the length is even, return the middle two characters
  return s[middle - 1] + s[middle];
}
