// const tinderUser = new Object();
const tinderUser = {}

tinderUser.name = "sammy"
tinderUser.id = "sammy123"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    fullname: {
        userfullname: {
            firstname: 'Israfil',
            lastname: 'Mallick'
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


const user0 = {
    1: 'user0',
    2: '123'
}

const user1 = {
    3: 'user1',
    4: '1234'
}

const user2 = {
    5: 'user2',
    6: '23434'
}

// const allUser = Object.assign({}, user0, user1, user2)
// console.log(allUser)

const allUser = {...user0, ...user1, ...user2}
console.log(allUser)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign({} ,target, source);
console.log(returnedTarget)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))


// Object Destructuring

const course = {
    courseName: 'JavaScript',
    coursePrice: '999',
    courseInstructor: "Israfil"
}

const {courseName: name, courseInstructor: instructor} = course

console.log(name, instructor)

// JSON
// {
//     "name": "Israfil",
//     "profession": "Programmer"
// }