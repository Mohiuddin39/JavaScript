// filter
let codding = ["javaScript", "PHP", "Phyton", "CPP"];
//NOTE: forEach Dose't return any value But filter return values
const code = codding.forEach((item) => {
  //   console.log(item);
});
console.log(code);

let nbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nbsResult = nbs.filter((item) => {
  return item > 4; // in this we give any condition
});
console.log("This is done with Filter", nbsResult);

//We also do this with forEach But with "filter" we can do it easly
const newNums = [];

nbs.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log("This is done with forEach", newNums);

//Example

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let myBooks = books.filter((item) => item.genre === "Fiction");
myBooks.filter((item) => {
  return (
    (item.publish >= 1990 && item.genre === "Science") || item.edition >= 2005
  );
});
console.log(myBooks);
