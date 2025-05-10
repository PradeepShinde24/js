// Stack and Heap

// All Primtive type store in Stack
// All Non Primtive type store in Heap

let name = "Pradeep"
let firstName = name
firstName = "Pradu"

console.log(name);
console.log(firstName);

let userOne = 
{
    email: "pradeepshinde2001@gmail.com",
    upi: "user@ybl"
}

let userTwo =  userOne     // both referring to same reference


userTwo.email = "pradeep.21910955@viit.ac.in"
console.log(userOne.email);
console.log(userTwo.email);

