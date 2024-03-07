// On the basis of kis tarah se data ko memory me store kiya jata hai aur kaise access kiya jata hai ush basis pe data ke 2 categorisation hai
// Primitive (call by value)
// Non -primitive/ Refrence type (call by refrence)


/*
#Primitive (7 types) : String,Number, Boolean, Null, Symbol, Undefined, BigInt

#Refrence(Non-primitive) : Array, Objects, Function
*/


// javascript is a dynamically typed language


const score = 100
const scorevalue = 100.3


const isLoggedIn = true
const outsideTemp = null
let userEmail;


const badaNumber = 1234567891234n
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)



// Non-primitive 
// ----> Array, Objects, Functions

const heros = ["Shaktiman","naagraj","doga"]      // Array

let myObj = {
    name: "Naam",           // Object
    age : 69
}

const myFunction = function(){             // Function
    console.log("namaste Duniya")
}

console.log(typeof badaNumber)
