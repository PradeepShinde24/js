// for of

// // ["", "", ""]    // strings under array
// // [{},{},{}]      // objects under array

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for(const greet of greetings)
// {
//     console.log(`Each char is  ${greet}`);
    
// }


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'Pub-G',
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }     // Error: Object is not iterable