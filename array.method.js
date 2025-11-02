const products = [
    {name: 'redmi', brand: 'xiaomi', price: 1200, color:'red'},
    {name: 'galaxy', brand: 'samsung', price: 2200, color:'black'},
    {name: 'iphone', brand: 'apple', price: 3200, color:'white'},
    {name: 'pixel', brand: 'google', price: 2800,   color:'blue'},  

]
// const result = products = products.map(products => products.price + 100);
//console.log(result);
// output: [1300, 2300, 3300, 2900]
// Explanation: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//forEach
/*
 products.forEach(products => {

});
console.log(products);
*/
//const result = roducts.filter(products => products.price >= 3000)
//console.log(result);
// output: [ { name: 'iphone', brand: 'apple', price: 3200, color: 'white' } ]

//find
//const result = products.find(products => products.name === 'apple');
//console.log(result)


/* destructuring */

const friends = [ 'a', 'b', 'c', 'd', 'e' ];
const [element1, element2, ...restElements] = friends;
console.log(element3,);
// output: c

/* const person = {
    // name: "Hero Aom",
  age: 24,
  friends: ["bd", "film"],
country: "Bangladesh"   
}
const{ name, age, country, friends} = person;
console.log(friends);
// output: [ 'bd', 'film' ]
*/


const person = {
    name: "Hero Aom",
    age: 24,
    friends: ["bd", "film"],
    family: {
        father: "alim",
        mother: "sufia", }
}
const jsonData = JSON.stringify(person);
const planData = JSON.parse(jsonData);
console.log(planData);
// output: { name: 'Hero Aom', age: 24, friends: [ 'bd', 'film' ], family: { father: 'alim', mother: 'sufia' } }


