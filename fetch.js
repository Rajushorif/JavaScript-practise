const person = {
    name: "saif",
    age: 30,
    city: "Dhaka" ,
    family: {
        spouse: "Sumaiya",
        children: ["Hamza", "Saifullah"]
    }
}
const jsonData = JSON.stringify(person);
 
const planData = JSON.parse(jsonData);

// fetch.js
fetch("url")
     .then()