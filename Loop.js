for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}
// for reverse order
for (let i = 4; i >= 0; i--) {
  console.log("Reverse iteration " + i);
}
// for odd numbers
for (let i = 1; i < 10; i += 2) {
  console.log("Odd number: " + i);
}
// for and if
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
// while loop
let count = 0;
while (count < 5) {
  console.log("Count is " + count);
  count++;
}
