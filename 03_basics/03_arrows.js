const user = {
    username: "pradeep",
    price: 999,

    welecomeMessage: function()
    {
        console.log(`${this.username}, welcome to website `);
        console.log(this);

    }
}
// // user.username = "sam"      
// user.welecomeMessage();      // if user.username = "sam"  taken first then this line print sam, welcome to website
// user.username = "sam"        
// user.welecomeMessage();

// console.log(this);


// ************************************** //


function chai(){
    let username = "pradeep"
    console.log(this.username);
}
chai();


const chai1 = function(){
    let username = "pradeep"
    console.log(this.username);
}
chai1();


const chai2 = () =>{
    let username = "pradeep"
    console.log(this);
    console.log(this.username);

}
chai2();


console.log("\n*******Writing Method of Arrow functions*******");

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));

const addTwo1 = (num1, num2) => num1 + num2
console.log(addTwo1(3, 4));

const addTwo2 = (num1, num2) => (num1 + num2)    // only parentheses
console.log(addTwo1(3, 4));

const addTwo3 = (num1, num2) => ({username: "pradeep"})
console.log(addTwo3(3, 4));
 

// const myArray = [2,5,3,7,8]
// myArray.forEach(function(){})
// myArray.forEach(() => {})
// myArray.forEach(() => ())