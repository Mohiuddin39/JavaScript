//Switch
/*
//Basic syntex
switch (key) {
  case value:
    break;

  default:
    break;
}
*/

let month = 5;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;

  default:
    console.log("Nothing");
    break;
}

let name = "MohiudDin";

switch (name) {
  case "Ali":
    console.log("Not Match");
    break;
  case "Muzamal":
    console.log("Not Match");
    break;
  case "Talha":
    console.log("Not Match");
    break;
  case "MohiudDin":
    console.log("Matched");
    break;
  case "Hamza":
    console.log("Not Match");
    break;

  default:
    console.log("Absolutly not match");
    break;
}
