// const name = "Naam"
// const repoCount = 50

// console.log(name+repoCount)    // not recommended

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Game-Ka-Naam')
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('e'))
console.log(gameName.substring(0,4));   // ishme minus nhi dal skte 
console.log(gameName.slice(-10,5));    // ishme negative value dal k bhi kr skte hai 


const newStringOne = "   Nayanaam   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://kuch.com/kuch%20tohHai"
console.log(url.replace('%20','-'));

console.log(url.includes('kuch'));

console.log(gameName.split("-"));