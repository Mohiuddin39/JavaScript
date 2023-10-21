let num = 400;
console.log(num);

let Numbers = new Number(100);
console.log(Numbers);
console.log(Numbers.toFixed(2));
console.log(Numbers.toString().length);

let nbr2 = 123.8452;
console.log(nbr2.toPrecision(4));
console.log(nbr2.toPrecision(3));
console.log(nbr2.toPrecision(2));

let hundrds = 100000000000000;
console.log(hundrds.toLocaleString());

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);

console.log(Math.abs(-64));
console.log(Math.round(10.6));
console.log(Math.ceil(10.4));
console.log(Math.floor(10.4));
console.log(Math.min(10, 12, 4, 62, 1));
console.log(Math.max(10, 12, 4, 62, 1));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

let min = 10;
let max = 30;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
