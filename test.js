const { addFlower, findExpensiveFlowers } = require("./flowers.js")

addFlower({
    color: "Orange",
    species: "Tulip",
    price: 0.95
})

addFlower({
    color: "White",
    species: "Baby Breath",
    price: 0.40
})

addFlower({
    color: "Blue",
    species: "Orchid",
    price: 1.05
})

const expensiveFlowers = findExpensiveFlowers()

<<<<<<< HEAD
console.log(
    
    
    `
=======
console.log(`
>>>>>>> 87b7b8e6aba52610bf26b6657cf4f0ee3db7745a







Test: Three new flowers added to array.
Price #1 is 0.95
Price #2 is 0.40
Price #3 is 1.05
`)

if (expensiveFlowers.length !== 2 || Array.isArray(expensiveFlowers[0])) {
    console.log(`
*************************
****   TEST FAILED   ****
*************************

The test code expected that two flowers should be
in the expensiveFlowers array, and that each item
in the array is an object.

Make sure that you have an \`if\` condition that
is checking the price property of each flower, and
that only flowers whose price is >= 1.00 are being
added.
`)
} else {
    console.log(`
****************************
****   TEST SUCCEEDED   ****
****************************

Congratulations on writing valid code for your first
self-assessment project.
`)
}

console.log(expensiveFlowers)


