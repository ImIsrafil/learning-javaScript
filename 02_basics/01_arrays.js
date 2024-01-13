const myArray = [0, 1, 2, 3, 4, 5, 6, 7]

// console.log(myArray)
// console.log(myArray[0])
// console.log(myArray[1])

myArray.push(8)
// console.log(myArray)

myArray.pop()
// console.log(myArray)

myArray.unshift(-1)
// console.log(myArray)

myArray.shift()
// console.log(myArray)

// console.log(myArray.includes(7))
// console.log(myArray.indexOf(7))

// console.log(myArray.indexOf(9))

const myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

const myNewArray2 = myArray.splice(1, 3)
// const myNewArray2 = myArray.splice(1, 3, 10)
// const myNewArray2 = myArray.splice(1, 0, 10)

console.log(myArray)
console.log(myNewArray2)

