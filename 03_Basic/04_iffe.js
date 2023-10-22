// Immediately Invoked Function Expressions (IIFE)
/*
question: why iffe is used?
ans: Gooble scope kay polluction say bachanay kay liay iffe used hoota hay.
*/

(function one() {
  //Named iffe
  console.log("MohiudDin");
})(); // if we used two iffe in a file we must used " ; ".

((num1, num2) => {
  // Simple iffe OR without name iffe
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
})(5, 5);
