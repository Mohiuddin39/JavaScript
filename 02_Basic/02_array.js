let school = ["high", "gov", "primery", "ghousia"];
let rule = [1, 2, 3, 4, 5, 6, "Mohiuddin"];

school.push(rule);
console.log(school);
console.log(school[4][6]);

let allSchhoRule = school.concat(rule);
console.log("🚀 ~ file: 02_array.js:9 ~ allSchhoRule:", allSchhoRule);

let all_school_rule = [...school, ...rule];
console.log("🚀 ~ file: 02_array.js:12 ~ all_school_rule:", all_school_rule);

let arrayInAarray = [1, 2, 3, [5, 6], 7, [8, 8, [1, 3, 5, 7, [1]]], 10];
let flatResult = arrayInAarray.flat(Infinity);
console.log("🚀 ~ file: 02_array.js:16 ~ flatResult:", flatResult);

//---------------
console.log(Array.isArray("MohiudDin"));
console.log(Array.from("Mohiuddin"));
console.log(Array.from({ name: "MohiuDin" })); // intersting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
