function myName() {
  console.log("Mo");
  console.log("hi");
  console.log("dD");
  console.log("in");
}
myName();
///////////////////Parameters
function twoValues(nbr1, nbr2) {
  console.log(nbr1 + nbr2);
}
twoValues(5, 5);
////////Arguments

function addTwoNumbers(number1, number2) {
  //console.log(number1 + number2);

  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result: ", result);

function isUserLogin(user = "sam currun") {
  if (!user) {
    console.log("please Login in");
    // return;
  }
  return user;
}
console.log(isUserLogin());
console.log(isUserLogin("MohiudDin"));

function calValue(val1, ...value) {
  return value;
}
console.log(calValue(1, 2, 9, 0));

//Object and Array in Functions
const user2 = {
  name: "MohiudDin",
  email: "mohiu@gmail.com",
  password: 12345678,
};

function objInFun(obj) {
  return obj;
}
console.log(objInFun(user2));
console.log(objInFun(user2.name));

let rollNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 39];

function ArrayinFun(...numbers) {
  return numbers;
}

console.log(ArrayinFun(rollNumbers));
console.log(ArrayinFun(rollNumbers[8]));
