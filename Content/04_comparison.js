// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2>=1);
// console.log(2 >= 1);


// console.log("2" > 1);                  // predictable result nhi deta 
// console.log("02">1);

// console.log(null>0);
// console.log(null==0);
// console.log(null >= 0);                

/*  The reason is that an equality check == and comparison > < >= <= work differently.
Comparisn convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) nulll > 0 is false.  
    
*/

// console.log(undefined>0);
// console.log(undefined == 0);
// console.log(undefined>=0);


// Strict check  ===
console.log("2" === 69);