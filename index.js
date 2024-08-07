// We have 3 ways to store data in javascript

//1. var
var firstName; // variable declaration
firstName = "Sandeep"; // variable assignment

var lastName = "Singh"; // variable declaration + assignment
console.log(lastName, firstName);

// we are allowed to re-declare variable (not a good thing)
var firstName = "Anmol";
var lastName = "Singh";
console.log(firstName, lastName);

// we are allowed to re-assign to a variable (not too bad thing)
var myCar = "Honda";
myCar = "G-Wagon";
console.log(myCar);

//2.let
let favFood;
favFood = "Biryani";
console.log(favFood);

let favDrink = "Prime";
console.log(favFood);

// we can't re-declare same variable
let favMusic = "Dope-Shope";
// let favMusic;

// we are still allowed to re-assign to a variable
favMusic = "King-Shit";
console.log(favMusic);

// 3. const
// we have to declare and assign on the same spot, we can't do it in two steps
const pi = "3.14";
// we can't re-declare same variable
// we can't re-assign same data to a variable
