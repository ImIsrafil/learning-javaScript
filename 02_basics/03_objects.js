// Singleton
// Object.create()

const israfilsId = Symbol("israfilsId")

const myObject = {
    name: "Israfil",
    "full name": "Israfil Mallick",
    age: 22,
    location: "Dhaka",
    isLoggedIn: false,
    [israfilsId]: "4734875878",

    greeting: function () {
        console.log(`Hello JS programmer ${this["full name"]}`)
    }
}

myObject["programming-language"] = ["JavaScript", "Python"]

Object.freeze(myObject)

myObject.profession = "Programmer"

console.log(myObject)
console.log(myObject.name)
console.log(myObject["name"])
console.log(myObject[israfilsId])
console.log(myObject["full name"])
console.log(myObject.greeting())
