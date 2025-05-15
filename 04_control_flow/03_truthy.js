
// const userEmail = "pradeepshide2001@gmail.com"
const userEmail = []


if(userEmail)
{
    console.log("Got user email");
}
else
{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, -0, BigInt 0n, "", null, undefined, NaN


// Truthy Values
// true, "0", 'false', "false", " ", [], {}, function() {}, 


if(userEmail.length === 0)
{
    console.log("Array is Empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}


// Nullish Coalescing Opertor(??): null undefined

let val1;
let val2;
let val3;
let val4;

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 20 ?? 30 

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary Opertor
// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");
