//*************************** Conversion *************************
let nbr = true;
//console.log("🚀 ~ file:  ~ nbr:", typeof nbr);
let isThisNbr = Number(nbr);
//console.log("🚀 ~ file:  ~ isThisNbr:", typeof isThisNbr);
//console.log("🚀 ~ file:  ~ isThisNbr:", isThisNbr);
/*
When we Converting some thing as a Number
33 => 33
"33abc" => NaN
undefined => NaN
null => 0
true => 1 / false => 0
*/

let abc = null;
//console.log("🚀 ~ file:  ~ abc:", typeof abc);

let isBolean = Boolean(abc);
//console.log("🚀 ~ file: ~ isBolean:", isBolean);
/*
When we Converting Somethig as a Bolean

1 => true / 0 => false
"" => fasle
"MohiudDin" => true
undefined => false
null => false
*/

let someNumber = 33;

let NumberString = String(someNumber);
//console.log("🚀 ~ file: ~ NumberString:", NumberString);
/*
when we convert someNumber to string
33 => string

*/

// *************************** Operations *********************
let str1 = "Ghuilam";
let str2 = " MohiudDin";
let str3 = str1 + str2;
//console.log("🚀 ~ file: ~ str3:", str3);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

//console.log(2 + "2"); // 22
//console.log("2" + 2); // 22
//console.log("2" + 2 + 3); // 223
//console.log(2 + 2 + "3"); // 43
//console.log(5 + 2 * 3 % 2); // using this is not good Practice
//console.log(((5 + 2) * 3) % 2); // using this is good Practice

let gameCount = 100;
//gameCount++;
++gameCount;
//console.log(gameCount);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// output: "a:4, b:4"

// PreFix and PostFix link
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
