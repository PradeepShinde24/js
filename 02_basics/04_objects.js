// const tinderUser = new Object()    
const tinderUser = {}     

tinderUser.id = "123abc" 
tinderUser.name = "Sammy" 
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pradeep",
            lastname: "shinde"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 2,
        email: "abc@gmail.com",
    },
    {
        id: 3,
        email: "xyz@gmail.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.constructor);
console.log(tinderUser.hasOwnProperty('isLogged'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// *********** Object Destructing ****************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: Instructor} = course
console.log(Instructor);


// *********** JSON API *****************

// JSON API in Object formate
{
    "name":"hitesh",
    "coursename":"JS in hindi",
    "price": "free"
}

// JSON API in Array formate
[
    {}, 
    {}, 
    {}
]

