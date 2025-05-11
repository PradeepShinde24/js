// *********************** Dates ****************

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2022-01-14")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2022")
console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());



let abc =  `Month is ${(newDate.getMonth())+1} and the time is `
console.log(abc);


let newDate1 = newDate.toLocaleString('default', { 
    weekday: "long",
})
console.log(newDate1);


