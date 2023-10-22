let a = 100;
let d = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 40;
  console.log("D in Scope", d);
  console.log("inner a = ", a);
}

console.log(a);
// console.log(b);
console.log(c);

function one() {
  const user = "MohiudDin";
  function two() {
    const userId = "13453bgjk";
    console.log(`${user} id is ${userId}`);
  }
  //console.log("user New Id", userId);
  two();
}
one();

if (true) {
  const fName = "Ghulam";
  if (true) {
    const lName = "MohiudDin";
    console.log(`${fName}  ${lName}`);
  }
  //   console.log(lName);
}

//++++++++++++++++++++ intersting ++++++++++++++

console.log(valueone(6));
function valueone(nbr) {
  return nbr;
}
// console.log(valueone(6));

console.log(valuetwo(7));
const valuetwo = function (nbr) {
  return nbr;
};
// console.log(valuetwo(7));
