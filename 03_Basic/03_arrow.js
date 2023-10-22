const user = {
  name: "MohiudDin",
  age: 18,
  message: function () {
    console.log(`${this.name} and age is ${this.age}`);
    console.log(this);
  },
};
// user.message();
// user.name = "Ghulam";
// user.age = 19;
// user.message();

//console.log(this);

//Functions

function one() {
  let name = "MohiudDin";
  console.log(this.name);
}
//console.log(one());// we can't use this in function

let two = function () {
  let lname = "MohiudDin";
  console.log(this.lname);
};
console.log(two());

let three = function () {
  let lname = "MohiudDin";
  console.log(this);
};

//Arrow function

const value1 = (num1, num2) => {
  return num1 + num2;
};
console.log(value1(1, 2));

const add1 = (num1, num2) => num1 + num2;
console.log(add1(3, 4));
const add2 = (num1, num2) => num1 + num2;
console.log(add2(3, 4));
const add3 = () => ({ username: "hitesh" });
console.log(add3(3, 4));
