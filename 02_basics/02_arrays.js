const numbers0 = [0, 1, 2, 3, 4, 5, 6]
// console.log(numbers0)

const numbers1 = [7, 8, 9, 10, 11, 12]
// console.log(numbers1)

const numbers2 = numbers0.concat(numbers1)
// console.log(numbers2)

const numbers3 = [...numbers0, ...numbers1]
// console.log(numbers3)

const myMixArray = [1, 2, 3, [4, 5], [6, 7, [8, 9]]]
// console.log(myMixArray[4][2][1])

const myFlatArray = myMixArray.flat(Infinity)
// console.log(myFlatArray)


// console.log(Array.isArray("Israfil"))
const strArr = Array.from("Israfil")
console.log(strArr)

const score0 = 10
const score1 = 20
const score2 = 30

console.log(Array.of(score0, score1, score2, function sayHello() {console.log("hello world")}))