// Even-odd function
function checkEvenOdd(num) {
    return num % 2 ? "even" : "odd";
}
console.log(checkEvenOdd(40));
// loop showing even and odd numbers
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}
console.log(checkEvenodd(15)); // Output: odd
// even odd- clean code
showNumber(10);
function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}