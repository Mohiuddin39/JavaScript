let date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());
// console.log(typeof date);

let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getHours() + 1);

let milidate = Date.now();
console.log(milidate);
console.log(Math.floor(milidate / 1000)); // date comes in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
