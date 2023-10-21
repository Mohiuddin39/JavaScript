let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(typeof arr);

let arr2 = new Array(1, 2, 3, 4);

arr.push(7);
arr.pop();

arr.unshift(7);
arr.shift();
console.log(arr);

console.log(arr.includes(4));
console.log(arr.indexOf(5));

let myarr = arr.join();
console.log(arr);
console.log(myarr);

// slice and splice
let newArr = [0, 1, 2, 3, 4, 5];
console.log("🚀 ~ file: 01_array.js:22 ~ newArr:", newArr);

let newArr2 = newArr.slice(1, 4);
// very imp = in slice only copy of Array is given to slice
console.log("🚀 ~ file: 01_array.js:24 ~ newArr:", newArr);
console.log("🚀 ~ file: 01_array.js:25 ~ newArr2:", newArr2);

let newArr3 = newArr.splice(1, 4);
// very imp = in splice Original (Referance) of Array is given to splice
console.log("🚀 ~ file: 01_array.js:29 ~ newArr3:", newArr3);
console.log("🚀 ~ file: 01_array.js:30 ~ newArr:", newArr);
