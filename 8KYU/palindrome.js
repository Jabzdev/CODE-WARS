// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// My solution

//#1
function isPalindrome(x) { 
  // cleaning the string
  let cleanedStr = x.toLowerCase().replace(/[^a-z0-9]/g, '');
    
  // Check if the string is a palindrome
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

//#2
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}