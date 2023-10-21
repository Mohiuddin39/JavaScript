// Lerning String DataTypes

let name = "MohiudDin";
let age = 18;
//console.log(`My name is ${name} and i am ${age} year old`);

let myName = new String("G-MohiudDin");
console.log(myName);

let str1 = myName[2];
//console.log(str1);

let length = myName.length;
console.log(length);

let touppercase = myName.toUpperCase();
console.log(touppercase);

let indexof = myName.indexOf("D");
console.log(indexof);

let replace = myName.replace("Mo", "GM");
console.log(replace);

let split = myName.split("-");
console.log(split);

let slice = myName.slice(2, 7);
console.log(slice);

let sName = "     Ghulam Mohiuddin        ";
let sName2 = sName.trim();
console.log(sName2);

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));
