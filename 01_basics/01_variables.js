const accountId = 133445
let accountEmail = "israfil@google.com"
var accountPassword = "12345"
accountCity = "dhaka"
let accountState;

// accountId = 123455 // is not allowed

console.log(accountId);
accountEmail = "israfil@yeahoo.com"
accountPassword = '23454'
accountCity = "manikganj"

/*
    Prefer not to use var keywor
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);