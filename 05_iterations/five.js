// forEach loop

let codding = ["javaScript", "PHP", "Phyton", "CPP"];

// codding.forEach(function (item) {
//   console.log(item);
// });

// codding.forEach((item) => {
//   console.log(item);
// });

// codding.forEach((item, index, arr) => {
//   console.log(`item: ${item}, index: ${index}, arr: ${arr}`);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// myCoding.forEach((item) => {
//   console.log(item);
// });

myCoding.forEach((item) => {
  console.log(item.languageName);
});
