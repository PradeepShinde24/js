const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

// in this case we can concate more than 2 arrays
const indian_heros = ["shaktiman", "krish"]
const all_new_heros = [...marvel_heros, ...dc_heros, ...indian_heros]
console.log(all_new_heros);


// separte the array which is present in array and make one array
const another_array = [1,2,3,[4,5,6],7,[6,7, [4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Pradeep"))
console.log(Array.from("Pradeep"))
console.log(Array.from({name: "Pradeep"}))  // Intresting 

let score1 = 100;
let score2 = 200;
let score3 = 300

console.log(Array.of(score1, score2, score3));

