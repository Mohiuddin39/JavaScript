// while and do while loop
let marks = 1;
while (marks <= 34) {
  console.log(marks);
  marks++;
}

let marks2 = 1;
while (marks2 <= 34) {
  console.log(marks2);
  marks2 = marks2 + 2;
}

//do while loop
let score = 2;
do {
  console.log(score);
  score++;
} while (score < 15);

let score2 = 16;
do {
  console.log("Scores2 are", score2);
  score++;
} while (score2 < 15);

// while loop on array
let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr++;
}
