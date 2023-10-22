// reduce

const nums = [1, 2, 3, 4];

// let numsRes = nums.reduce((acc, crr) => {
//   console.log(`acc: ${acc} and crr: ${crr}`);
//   return acc + crr;
// }, 0);
// console.log(numsRes);

const myTotal = nums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce((acc, crr) => {
  console.log(`acc: ${acc} and crr: ${crr}`);
  return acc + crr.price;
}, 0);

console.log(totalPrice);
