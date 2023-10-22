/*
vScode Short cuts
Alt + J + up or down Arrow to move a line.
Alt + K + up or down Arrow to move a line up.
Shift + Alt + up or down Arrow to duplicate a line down.
Shift + Alt + up or down Arrow to duplicate a line up.
*/
// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    console.log("5 is Best");
  }
  console.log(element);
}
// console.log(element); // we can't acces this outside of Scope

// loop in a loop
/*
for (let i = 1; i <= 5; i++) {
  console.log(`Outer Loop = ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Inner Loop = ${j} and outer Loop = ${i}`);
  }
}
*/

// for loop on Array
let arr = ["MohiudDin", "Talha", "Hamza", "G Shabbir"];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

// break and continue in loop
for (let i = 1; i <= 9; i++) {
  if (i === 6) {
    console.log("I am Danger = 6");
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 9; i++) {
  if (i === 6) {
    console.log("I am 6 and not danger");
    continue;
  }
  console.log(i);
}
