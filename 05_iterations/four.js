// for in

let obj = {
  JS: "JavaScript",
  CPP: "C++",
  java: "Java",
  py: "python",
};

for (const key in obj) {
  console.log(`${key} => ${obj[key]}`);
}

// forin loop on Array
let arr = ["MohiudDin", "Talha", "Hamza", "Shabbir"];
// for (const key in arr) {
//   console.log(key);
// }
for (const key in arr) {
  console.log(`${arr[key]}`);
}

// forin = NOTE: forin loop Does't work on map
let map = new Map();
map.set("Pak", "Pakistan");
map.set("SA", "Soudia Arabia");
map.set("Dubai", "Dubai");

// for (const [key, value] in map) {
//   console.log(`${key} => ${value}`);
// }
for (const key in map) {
  console.log(`${key}`);
}
