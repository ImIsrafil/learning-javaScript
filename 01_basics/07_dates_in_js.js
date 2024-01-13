const myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())

// let createdDate = new Date(2023, 0, 14, 14, 3)
let createdDate = new Date("2023-1-14, 15:20")
console.log(createdDate.toLocaleString())

let timesPassedFromUnixEra = Date.now()
console.log(timesPassedFromUnixEra) 

const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');
console.log(moonLanding.getTime() - Date.now())