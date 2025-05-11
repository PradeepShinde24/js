// singleton


// ************* object literals **********

const mySym = Symbol("key1")

const JsUser = {
    name: "Pradeep",
    "full name": "Pradeep Shinde",
    [mySym]: "mykey1",
    age: 24,
    location: "Mumbai",
    email: "pradepshinde2001@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
 
console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name);   // Error
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);  
console.log(typeof JsUser[mySym ]);    


JsUser.email = "pradeep.21910955@viit.ac.in"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "pradeep@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
    // don not return anything so that's why it give undefined
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());

