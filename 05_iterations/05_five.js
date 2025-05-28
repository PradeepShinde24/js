const coding =  ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (value) {
//     console.log(value);
    
// })

// console.log("forEach loop using arrow function");

// coding.forEach((val) => {
//     consosle.log(val);  
// })


// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    // console.log(item);
    console.log(item.languageName);
    
})