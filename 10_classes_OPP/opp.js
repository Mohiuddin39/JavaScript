// opp = Object Orianted Programming

let user = {
  name: "MohiudDin",
  age: 18,
  email: "mohiu@google.com",

  getDetails: function () {
    console.log("Get User Details");
    console.log(`${this.name}`);
    // console.log(`${this}`);
  },
};

console.log(user);
console.log(user.getDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);
