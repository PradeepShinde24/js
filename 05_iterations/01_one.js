// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }   
}


// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

let myArray1 = ["flash", "batman", "superman"]
console.log(myArray1.length);
for (let index = 0; index <= myArray1.length; index++) {
    const element = myArray1[index];
    console.log(element);
}
// undefined ---bez array length nis 3 and ir goes to from 0 to 3 means 4 so it gives error undefined in js but in java ArrayIndexOutOfBoundsException


// break and continue

// for(let i =0; i<=20; i++)
// {
//     if(i == 5)
//     {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

for(let i =0; i<=20; i++)
{
    if(i == 5)
    {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
}

