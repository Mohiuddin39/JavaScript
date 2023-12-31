/*Premitive dataTypes
 7 types = string, number, boolean, Bigint,symbol, null, undefined

 let nbr = 123;
 let name = "Mohiuddin";
 let isBlolean = true;
 let BigNumber = 1234987654321345987654398765n;
 let temp = null; // Object
 console.log("🚀 ~ file: ~ temp:", typeof(temp))

let symbol1 = Symbol("123");
let symbol2 = Symbol("123");
console.log("🚀 ~ file: ~ symbol2:", typeof(symbol1)) 

console.log(symbol1 === symbol2);
*/

/*
//Referance OR NonPremitive DataTypes
//Array, Object, Function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let myObj = {
  name: "MohiudDin",
};
console.log(typeof numbers); // object

let myFun = function () {};
console.log(typeof myFun); // object
*/

/**
 Question: JavaScript is Dynamically or Static Language?
 Ans: JavaScript is Dynamically type language.
 */

/// ++++++++++++++++++++++++++++++++++++++++++++++++++
// Discition about Memory
/*
//1 = Stack : all Primitive DataType come into Stack (it gives us Copy)
//2 = Heap : all Non-Primitive DataType come into Heep (it give us Referance Or Origional)

// Examples :
let name = "Ghulam";
let fullName = name;
fullName = "MohiudDin Rizvi";
console.log(name);
console.log(fullName);

let userOne = {
  name: "Ali",
  age: 18,
};

let userTwo = userOne;
userTwo.name = "Mohiuddin";

console.log(userOne.name);
console.log(userTwo.name);
*/
