// Primitives
//      7 types of datas are primitive:
//      Number
//      String
//      Boolean
//      null
//      undefinded
//      Symbol
//      BigInt

// Non Primitives (Reference)
//      3 types of datas are non primitive
//      Array
//      Object
//      Function


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// console.log(typeof id)


const bigNumber = 23233435345345345353553453534543345345345345345n
console.log(typeof bigNumber)


const friends = ["Shohag", "Omar", "Sohel", "Dipu"]

// console.log(typeof friends)

const myObj = {
    firstName: "Israfil",
    lastName: "Mallick",
    age: 22,
}

// console.log(typeof myObj);

const myFunction = function myFunction() {
    console.log("Hello World")
}

// console.log(typeof myFunction)


//######################### MEMORY ##########################

// Stack (Primitive), Heap (Non Primitive) 

let admin = "Israfil"
let admin1 = admin
admin1 = "Alyssa"

console.log(admin)
console.log(admin1)

const user1 = {
    email: "user1@something.com",
    uid: "324535234"
}

const user2 = user1
user2.email = "user2@somthing.com" // This will also change user1.email value because they both containing same reference of value

console.log(user1)
console.log(user2)