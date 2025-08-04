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

// ternary operator example
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
