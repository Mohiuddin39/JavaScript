let user = "MohiudDin";

if (user) {
  console.log("working");
}

/*
//Falsy Values
// 0, -0, 0n, "", false, null, undefined, NaN 

//Truthy values
// "0", " ", 'false', [], {}, function(){}, and expect Falsy values All Other Values are Truthy 
*/

// Q: how to check if a empty Array?
//ANSWER:
let emptyArr = [];
if (emptyArr.length === 0) {
  console.log("Array is Empty");
}

// Q: how to check if a empty Object?
//ANSWER:
let emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let nbr;
// nbr = 5 ?? 10;
// nbr = null ?? 10;
// nbr = undefined ?? 10;
nbr = null ?? 10 ?? 20;

console.log(nbr);

// Terniary Operator

// condition ? true : false

let marks = 80;
marks <= 80 ? console.log(" B Grade") : console.log(" A Grade");
