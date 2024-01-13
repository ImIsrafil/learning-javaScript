const score = 100
// console.log(score)

const balance = new Number(400)

// console.log(balance)
// console.log(typeof balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 23.8948
// console.log(otherNumber.toPrecision(2))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'))


// #################### Math #####################

// console.log(Math.abs(-4))
// console.log(Number(Math.PI.toFixed(4)))
// console.log(Math.round(5.9))
// console.log(Math.floor(4.6))
// console.log(Math.ceil(4.9))
// console.log(Math.min(3, 5, 10, 7))
// console.log(Math.max(3, 5, 10, 7))
// console.log(Math.pow(4, 2))

console.log(Math.floor(Math.random() * 10) + 1)

/// Range -> 10 - 20

const min = 10
const max = 30

console.log(Math.floor((Math.random() * (max - min) + 1) + min))