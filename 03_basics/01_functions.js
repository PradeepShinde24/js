function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}
sayMyName()


// here number1 and number2 s parameter
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(24, 24)      // in this 24, 24 is argument 
// addTwoNumbers(24, " d")
// addTwoNumbers(24, null)

// const result = addTwoNumbers(7, 2)
// console.log("Result: ", result);


function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1+number2;
}
const result = addTwoNumbers(7, 2)
console.log("Result1: ", result);


function loginUserMessage(username){
    if(username === undefined)
    {
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("pradeep"));
console.log(loginUserMessage());


function loginUserMessage1(username1 = "sam"){
    if(!username1)
    {
        console.log("please enter a username")
        return 
    }
    return `${username1} just logged in`

}
console.log(loginUserMessage1());
console.log(loginUserMessage1("Pradeep"));


function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200, 500, 400, 300));

function calculateCartPrice1(val1, val2, ...num2){
    return num2;
}
console.log(calculateCartPrice1(200, 500, 400, 300));



const user = {
    username: "Pradeep",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
