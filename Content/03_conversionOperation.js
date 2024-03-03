// let score = 33
let score = "33abc"

// const {score} = req.body      // maan lo backend pe kaam kr rhe aur data joo h wo frontend se aa rha ya kisi form se toh hme nhi pta ki ushme jo data hai wo kon se type ka hai.

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);    // type casting
console.log(typeof valueInNumber);
console.log(valueInNumber);   // NaN --> Not a number ----> value


/*
"33" ==> 33
"33abc"  ==> NaN
true => 1 ; false ==> 0
null ==> 0
undefined ==> NaN

*/

let isLoggedIn = 69
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn)

/*
1 ==> true ; 0 ==> false
" "  ==> false
"abc" ==> true
*/



let someNumber = 69
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);