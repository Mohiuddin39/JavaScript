// for of loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const key of arr) {
  console.log(key);
}

let arr2 = ["MohiudDin", "Talha", "Hamza"];
for (const key of arr2) {
  console.log(key);
}

let str = "MohiudDin";
for (const key of str) {
  console.log(key);
}

// Maps

let map = new Map();
map.set("Pak", "Pakistan");
// map.set("Pak", "Pakistan"); // this is not printed, No Dupplion in Map()
map.set("SA", "Soudia Arabia");
map.set("Dubai", "Dubai");

// for (const key of map) {
//   console.log(key);
// }
for (const [key, value] of map) {
  console.log(`${key} => ${value}`);
}

// Objects = NOTE: forof loop is not work on Object, forin loop work on Object

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const key of myObject) {
//   console.log(`${key}`);
// }

for (const [key, value] of myObject) {
  console.log(`${key} => ${value}`);
}
