/*   -----------------   JS EXERCISES   -----------------*/

let x = "John"
let y = "Doe"
console.log(`${x} <> ${y}`)

// 22) Create an object with properties such name, surname, email
let objectOne = {
    name: 'Zee',
    surname: 'Mo',
    email: 'mozee@example.com'
}

// 23) Delete Email from the previously created object

delete objectOne.email

// 24) Create an array with 10 strings in it

let arrayWithStrings = ['one', 'tree', 'water', 'fire', 'bubble', 'game', 'cat', 'dog', 'john', 'marry']

// 25) Print in the console every string in the previous array

console.log(arrayWithStrings)

// 26) Create an array with 100 random numbers in it

// const arrayWithnumbers = function () {
//     let array = []
//     for (let i = 0; i < 100; i++) {
//         array.push(Math.floor(Math.random() * 99 + 1))
//     }
//     return array
// }

let arrayWithRandom100 = []
for (let i = 0; i < 100; i++) {
    arrayWithRandom100.push(Math.floor(Math.random() * 99 + 1))
}

// 27) Wrote a function to get the MAX and the MIN from the previously created array

const maxNumberOfTheArray = function (array) {
    console.log(Math.max(...arrayWithRandom100));
    console.log(Math.min(...arrayWithRandom100));
}

maxNumberOfTheArray(arrayWithRandom100)

// 28) Create an array of arrays, in which every array has 10 random numbers

let arrayOfArrays = Array(3).fill().map
    (
        () => Array(10).fill().map
            (
                () => Math.floor(Math.random() * 10)
            )
    );

console.log(arrayOfArrays)

// 29) Create a function that gets 2 arrays and returns the longest one

const longetsArray = function (array1, array2) {
    if (array2.length < array1.length) {
        return array1
    } else {
        return array2
    }
}

console.log(longetsArray(arrayWithStrings, arrayOfArrays))

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

let bigNumberArray = [10, 10, 10, 10, 10, 5000]
let smallNumberArray = [100, 10, 10, 10, 10, 10]

const sumOfArray = function (array1, array2) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i]
        console.log(array1[i])
    }
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i]
        console.log(array2[i])
    }
    return sum1 > sum2 ? array1 : array2
}
console.log(sumOfArray(bigNumberArray, smallNumberArray))