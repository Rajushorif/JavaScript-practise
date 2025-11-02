// const test = "";

// if(test) {
//     console.log("its a truthy value");
// } else {
//     console.log("its a falsy value");
// }

// test ? console.log("its a truthy value") : console.log("its a falsy value");

// const num = 50;
// const result = (num >= 10 && num < 20) ? "true" : "false";
// console.log(result);

const inActive = false;
const showUser = () => console.log("show user green")
const hideUser = () => console.log("hide user" )
//inActive ? hideUser() : showUser();
inActive && showUser();
inActive || hideUser();
