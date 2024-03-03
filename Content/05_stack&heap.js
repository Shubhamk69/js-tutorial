// Stack (Primitive) & Heap (Non - Primitive)


// Example of Stack ---> values sirf copy hoti hai
let myName = "Naam"
let ekAurNaam = myName
ekAurNaam = "DushraNaam"
console.log(ekAurNaam);
console.log(myName);


// Example of Heap ---> yaha refrence liya jata hai(original value ka refrence milta hai)

let userOne = {
    email: "example@gmail.com",
    upiId : "abc@ybl"
}

let userTwo = userOne

userTwo.email = "kuch@gamil.com"

console.log(userOne.email);
console.log(userTwo.email) 