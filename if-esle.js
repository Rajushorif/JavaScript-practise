let hour = 18;
if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");

// Output: Good morning!

// function of return maximum of two numbers
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(30, 20));
// Output: 30

// ternary operator example-----The ternary operator in JavaScript is a compact way to write conditional logic.
//  It’s called ternary because it takes three parts: condition ? valueIfTrue : valueIfFalse

let age = 18;
let adultAge = age >= 18 ? "Adult" : "Child";
console.log(adultAge);
// Output: Adult
// not-clean code
if (age >= 18) {
  result = "Adult";
} else {
  result = "Child";
}
console.log(result);
// Output: Adult
let score = 5;
let grade = score >= 80 ? "Excellent" : "Try Again";
console.log(grade);
// Output: Excellent
// if-else example
if (score >= 80) {
  result = "Excellent";
} else {
  result = "Try Again";
}
console.log(result);
// same but different way
console.log(isLandscape(800, 600));
function isLandscape(width, height) {
  return width > height; // here i don't need to called ? true : false because the return value is already boolean
}

// switch case example
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");

//         break;
//     case 7:
//         console.log("Sunday");

//         break;
//     default:
//         console.log("Invalid day");
// }
// Output: Wednesday
// exercise---5
function output = fuzzBuzz(false){

};
