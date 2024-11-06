/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

//My solution
//#1
function isIsogram(str) {
  str = str.toLowerCase();

  // Create a Set to store unique characters
  let charSet = new Set();

  // Loop through each character in the string
  for (let char of str) {
    if (charSet.has(char)) {
      // If the character is already in the set, it's a repeating character
      return false;
    }
    charSet.add(char); // Add the character to the set
  }

  // If no repeating characters were found, it's an isogram
  return true;
}
