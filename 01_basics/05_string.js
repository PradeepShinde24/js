const name  = "Pradeep "
const repoCount = 50
console.log(name + repoCount + " value");
console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);


const gameName = new String(`Volleyball`)
console.log(gameName[0]);            // o/p: V
console.log(gameName[1]);            // o/p: o
console.log(gameName.__proto__);     // o/p: {}


console.log("Length of the String is "+gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('b'));


const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-8, 6)
console.log(anotherString);

 
const newStringOne = "  Pradeep  "
console.log(newStringOne);
console.log(newStringOne.trim());

 
const url = "https://pradeep.com/pradeep%20shinde"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('pradeep'));
console.log(url.includes('sunday'));


console.log(gameName.split('y'));
console.log(gameName.split('l'));











