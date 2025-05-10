// DataTypes

    // Primtive Types (7)   --- call by value
// ----> String
// ----> Numbers
// ----> Boolean
// ----> null
// ----> undefined
// ----> symbol
// ----> BogInt


const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail = undefined       // we can also wwrite this sytax like let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id);      
console.log(typeof id);
console.log(id === anotherID);    // false

const bigNumber = 84425425464626885262416n
console.log(bigNumber);
console.log(typeof bigNumber);


    // Non-Primitive Types (Refernce) ----- call by reference
// ----> Array
// ----> Object
// ----> Functions

const arr = ["shaktiman", "naagraj", "doga"]

let MyObj = {
    name: "pradeep",
    age: 23,
}

const myFunction = function (){
    console.log("Hello World");
    
}
  