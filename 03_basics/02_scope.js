// Global Scope
// Block Scope

let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)

if (true) {
    let a = 100
    const b = 200
    var c = 300

    console.log("INNER", a)
    console.log("INNER", b)
    console.log("INNER", c)
}

console.log(a)
console.log(b)
console.log(c)

/*
    Study of Above investigation is that variable declared with var keyword
    doesn't have block scope
*/ 

function one() {
    const username = "Israfil"
    
    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website) // ReferenceError: website is not defined

    two()
}

one()

addOne()

function addOne(num) {
    return num + 1
}

// addTwo() // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}
