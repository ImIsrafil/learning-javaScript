let score = false;

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Number Conversion

// "33abc" => NaN
// true => 1
// null => 0
// undefined => 0
// "33" => 33


let isLoggedIn = 0

// console.log(typeof isLoggedIn)

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)


// Conversion to boolean
// 0 => false; 1 => true
// "" => false; "israfil" => true
// null => false; undefined => false


let someNumber = undefined

let stringSomeNumber = String(someNumber)

// console.log(stringSomeNumber)
// console.log(typeof stringSomeNumber)


// ---------------Operations----------------

let value = 3
let negValue = -value

// console.log(negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 3)
// console.log(2 ** 3)
// console.log(2 / 2)
// console.log(2 % 3)

let str1 = "Israfil"
let str2 = " Mallick"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(2 + "2")
// console.log(2 + 2 + "5")

// console.log(+true)
// console.log(+"")


// Bad Practice
// let num1, num2, num3
// num1, num2, num3 = 2 + 2



// Prefix and Postfix Investigation Study
let a = 3
let b = a++

console.log(a, b)

let x = 3
let y = ++x
console.log(y, x)