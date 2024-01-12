const name = "Israfil"
const repoCount = 50

// console.log("Hello my name is " + name + ". My repository quantity is " + repoCount)

// console.log(`Hello ${name}, your repository quantity is ${repoCount}`)

const gameName = new String("Israfil")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('fil'))
console.log(gameName.charCodeAt(0))

const newString = gameName.substring(0, 3)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = "           Israfil       "

console.log(newStringOne)
console.log(newStringOne.trim())

const url = 'https://israfil.com/project%20react'
const urlFix = url.replace('%20', '-')

console.log(urlFix)

console.log(newStringOne.includes('Israfil'))

const newStringTwo = "The quick brown fox jumps over the lazy dog."

console.log(newStringTwo.split(" "))