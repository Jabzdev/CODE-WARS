// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

//My solution
//#1
function stringToArray(string){
  return string.split(' ');
}

//#2
const stringToArray = string => string.split(' ');