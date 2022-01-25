const flowers = [
    {
        id: 1,
        color: "white",
        species: "White Rose",
        price: .90
    },
    {
        id: 2,
        color: "red",
        species: "Red Tulip",
        price: 1.10
    }

]

const daisy = {
    color: "pink",
    species: "daisy",
    price: .95
}

const daffodil = {
    color: "yellow",
    species: "Daffodil",
    price: .40
}

const orchid = {
    color: "blue",
    species: "Orchid",
    price: 1.05
}

const addFlower = (flowerObject) => {
    flowerObject.id = flowers.length + 1
    flowers.push(flowerObject)
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */
}

addFlower(daisy)
addFlower(daffodil)
addFlower(orchid)
// console.log(flowers)

const findExpensiveFlowers = (Object) => {
    const expensiveFlowers = []  // Do not change this code
    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
            }}

   
    /*object
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */

    console.log(expensiveFlowers)
    // console.log(expensiveFlowers)
    return expensiveFlowers  // Do not change this code
    // console.log(expensiveFlowers)
}

findExpensiveFlowers(flowers)




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

