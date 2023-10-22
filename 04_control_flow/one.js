// if
let userLogedin = true;
if (userLogedin === true) {
  console.log("user scussaly loged in");
}

let score = 90;
if (score > 80) {
  let power = "fly";
  console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

// if else
let numbers = 70;
if (numbers < 50) {
  console.log("you are passes");
} else {
  console.log("you are loss");
}

// <, >, <=, >=, ==, !=, ===, !==

//if elseif
let marks = 80;
if (marks < 40) {
  console.log("Oops you are failed");
} else if (marks < 60 && marks > 40) {
  console.log("your grade is C");
} else if (marks <= 80 && marks >= 60) {
  console.log("your grade is B");
} else if (marks <= 90 && marks > 80) {
  console.log("Your grade is A");
} else {
  console.log("Your grade is A+");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

// shift + Alt + down arrow = for copy and paste to down in Vscode
