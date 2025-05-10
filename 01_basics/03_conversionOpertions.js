// let score = "33"
// let score1 = "33abc"
// let score2 = null;
// let score3 = undefined;
// let score4 = true;

// console.log(typeof score);
// console.log(typeof(score));


// console.log("Convert String to Number:");
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// console.log("Convert String to Number:");
// let valueInNumber1 = Number(score1);
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);


// console.log("---------Convert null to Number---------------");
// let valueInNumber2 = Number(score2);
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);


// console.log("---------Convert undefined to Number---------------");
// let valueInNumber3 = Number(score3);
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);


// console.log("---------Convert boolean to Number---------------");
// let valueInNumber4 = Number(score4);
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);


// // "33"  => 33
// // "33abc" => Nan
// // true => 1   false => 0


// console.log("----------Conversion-------------")
// let isLoogedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoogedIn);
// console.log(isLoogedIn); 


// // 1 => true; 0=> false
// // ""  => false
// // "Pradeep" => true



// console.log("---------Convert Number to String---------------");
// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




// ************************ Opertions *************************

let value = 3
let negValue = -value
console.log(negValue);     // -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);  // power
console.log(2%3);


let str1 = "Hello"
let str2 = " Pradeep" 
let str3 = str1+str2;
console.log(str3);


console.log("1"+ 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(3 + 4 * 5 % 3);


console.log(+true);    // 1
console.log(+"");      // 0 
// console.log(true+);     // Error
// console.log(""+);      // Error


let num1, num2, num3
num1 = num2  = num3 = 2  + 2    // avoid 


console.log("---------------Posfix Opertor-------------");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);    // 101

let x = 3;
const y = x++;
console.log("x: "+x);    // 4
console.log("y: "+y);    // 3


let x1 = 3n;
const y1 = x1++;
console.log(x1);           // 4n
console.log(y1);           // 3n
console.log("x1: "+ x1);   // 4
console.log("y1: "+ y1);   // 3


console.log("---------------Prefix Opertor-------------");

let a = 3;
const b = ++a;
console.log("a: "+a);   // 4
console.log("b: "+b);   // 4

let c = 3n;
const d = ++c;
console.log(c);          // 4n
console.log(d);          // 4n
console.log("c: "+ c);   // 4
console.log("d: "+ d);   // 4




