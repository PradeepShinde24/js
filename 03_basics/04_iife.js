
function chai () {
    console.log(`DB CONNECTED`);
}
chai();    


console.log("********* IIFE *******");

(function chai () {
    console.log(`DB CONNECTED`);
}) ();     //  if we not give semicolon here next function give error

// () ()

(() => {
    console.log(`DB CONNECTED TWO`);
}) ();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("pradeep");
