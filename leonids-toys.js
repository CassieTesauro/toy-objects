// const barbie = {
//     id: 1,
//     name: "Barbie",
//     amountInStock: 50,
//     price: 24.99,
//     batteriesIncluded: false
// }
// const robot = {
//     id: 1,
//     name: "Robot",
//     amountInStock: 32,
//     price: 44.99,
//     batteriesIncluded: true
// }
// const kickball = {
//     id: 3,
//     name: "kickball",
//     amountInStock: 47,
//     price: 4.99,
//     batteriesIncluded: false
// }

const toys = [
    {   
        id: 1,
        name: "Barbie",
        amountInStock: 50,
        price: 24.99,
        batteriesIncluded: false
    },
    {   
        id: 2,
        name: "Robot",
        amountInStock: 32,
        price: 44.99,
        batteriesIncluded: true
    },
    {   
        id: 3,
        name: "kickball",
        amountInStock: 47,
        price: 4.99,
        batteriesIncluded: false
    }
];

// console.log(toys);

// for (const toy of toys) {
//     console.log(`Name is ${toy.name}`)
// };




//book 6 about push() command
const kite = {
    id: 4,
        name: "kite",
        amountInStock: 22,
        price: 14.99,
        batteriesIncluded: false
}
const piano = {
    id: 5,
        name: "piano",
        amountInStock: 31,
        price: 39.95,
        batteriesIncluded: true
}

toys.push(kite)
toys.push(piano)

//console.log(toys);

// for (const toy of toys) {
//      console.log(`Name is ${toy.name}`)
// };


//chapter 7 string interpolation exercise:
//NOTE: use shortcut forof and tab to make loop template
// for (const toy of toys) {
//     console.log (`We have ${toy.amountInStock} of the ${toy.name}s and they cost ${toy.price} each.`)
// }


//chaper 8
// for (const toy of toys) {
//     toy.price = toy.price + 10
//     console.log (`We have ${toy.amountInStock} of the ${toy.name}s and they cost ${toy.price} each.`)
// }


// //chapter 9

// const toyToFind = 2

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.price = toy.price + 10
//         console.log(`We have ${toy.amountInStock} of the ${toy.name}s and they cost ${toy.price} each.`)
//     }
    
// }


//chapter 10

const addToyToArray = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

const dinosaur = {
        name: "dinosaur",
        amountInStock: 49,
        price: 9.50,
        batteriesIncluded: false
}

addToyToArray(dinosaur)

for (const toy of toys) {
    console.log(`We have ${toy.amountInStock} of the ${toy.name}s and they cost ${toy.price} each.`)  
}