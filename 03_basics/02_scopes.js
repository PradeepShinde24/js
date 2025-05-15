var c = 300;
var d = 400;

if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;
    d = 40;

}

// console.log(a);
// console.log(b);
console.log(c);
console.log(d);

console.log("// ******************************************** // ");

var c = 300;
var d = 400;
let a = 100;

if(true)
{
    let a = 10;
    const b = 20;
    console.log("Inner", a);
    

}

console.log(a);




console.log("**************** Nested Scope ***************");

function one (){
    const username = "pradeep"
    console.log(username);    

    function two ()
    {
        const website = "youtube"
        console.log(website);
        console.log(username);
    }
    // console.log(website);    // Error bez we can't access the inner function variable in the ouside function but vice versa possible

    two();
}
    // two();         // Error: 

one();



if(true)
{
    const username = "Pradeep";

    if(username === "Pradeep")
    {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);   // Error: scope issue

    console.log(username);    

}
// console.log(username);     //  Error: scope issue


console.log("********* Intresting ************");


console.log(addOne(5));          // No error: bez addOne is hoisted (Hoisted: when we define a function using Function Declaration)
function addOne(num){
    return num + 1;
}


// console.log(addTwo(5));      // Error: bez Addtwo is not hoisted (Not Hoisted: when we define a function using a function Expression)
const addTwo = function (num1)
{
    return num1 + 2;
}
console.log(addTwo(5));     
