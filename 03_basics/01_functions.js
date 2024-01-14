function sayHi() {
    console.log("Hello World!")
}

sayHi()

function greeting(name) {
    console.log(`Hey Programmer ${name}`)
}

greeting("Israfil")
greeting()

function addTwoNumbers(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        return 0
    }
    return number1 + number2
}

console.log(addTwoNumbers(10, 30))
console.log(addTwoNumbers())


// Default Value of Parameters
function anotherAddFunction(number1 = 0, number2 = 0) {
    return number1 + number2
}

console.log(anotherAddFunction(10, 10))
console.log(anotherAddFunction(10))
console.log(anotherAddFunction())