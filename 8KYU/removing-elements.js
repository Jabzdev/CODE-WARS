// Take an array and remove every second element from the array. Always keep the   first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// My solutions

//#1
function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

//#2
const removeEveryOther = (arr) => arr.filter((item, i) => i % 2 == 0);
