const accountID = 144553
let accountEmail = "pradeepshinde2001@gmail.com"
var accountPassword = "12345"
acountCity = "Nashik"
let accountState;

// accountID = 2    // not allowed

accountEmail = "abcd@gmail.com"
accountPassword = "121234"
accountCity = "Pune"

/*
prefer not to use var
because of issue in block scope and functional scope 
 */


console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
