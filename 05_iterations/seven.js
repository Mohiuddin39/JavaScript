// map
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNumbers = numbers.map((item) => {
//   return item + 10;
// });

//Chainning in map

let newNumbers = numbers
  .map((item) => {
    return item + 10;
  })
  .map((item) => {
    return item * 3;
  })
  .filter((item) => {
    return item > 50 && item < 110;
  });
console.log(newNumbers);
