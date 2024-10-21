function fizzBuzz(input) {
  if (typeof input !== "number") {
    console.log("Not a number");
  } else if (input % 3 === 0 && input % 5 === 0) {
    console.log("FizzBuzz");
  } else if (input % 3 === 0) {
    console.log("Fizz");
  } else if (input % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(input);
  }
}
fizzBuzz(true);
fizzBuzz("Jabu");
fizzBuzz(7);
fizzBuzz(5);
fizzBuzz(9);
fizzBuzz(15);
