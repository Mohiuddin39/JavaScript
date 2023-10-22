// object literals

// when someone ask add a Symbol in a Object
let mySymbol = Symbol("Hello!");

let user = {
  name: "MohiuDin",
  "full name": "Ghulam MohiudDin",
  [mySymbol]: "World", // added a Symble type in Object
  age: 18,
  email: "mohiu@gmail.com",
  location: "pindi Abdul rahaman",
  islogedin: false,
  lastLoginDays: ["Monday", "Sunday"],
};

console.log(user.name);
// console.log(user[age]); // we got error
console.log(user["age"]); // and this is Correct
console.log(user["full name"]);
console.log(user[mySymbol]); // and there no use of ""

user.email = "moni@google.com";
console.log(user.email);
user.age = 19;
console.log(user.age);

user.greeting = function () {
  console.log("Hello! My user");
};
console.log(user.greeting());

user.greeting2 = function () {
  console.log("Hello! New user");
};
console.log(user.greeting2());
