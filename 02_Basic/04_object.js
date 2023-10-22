// const tinderUser = new Object() //Singleton
const googleUser = {};
googleUser.id = "12sghgf";
googleUser.email = "mynew@gmail.com";
googleUser.isLogedIn = false;
//console.log(googleUser);

const regularuser = {
  name: "Rashid",
  details: {
    fullName: "Rashid Ali",
    email: {
      newMail: "new@gmail.com",
      oldmail: "old@gmail.com",
    },
  },
};

console.log(regularuser.details.email.oldmail);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

console.log(googleUser);
console.log(Object.keys(googleUser));
console.log(Object.values(googleUser));
console.log(Object.entries(googleUser)); // not very used

// JSON Formater for formating api's ( https://jsonformatter.org/ )

const course = {
  name: "JavaScript",
  price: 999,
  CourseInstuctor: "Hitesh",
};

// course.CourseInstuctor

const { CourseInstuctor: Techer } = course;
// console.log(CourseInstuctor);
console.log(Techer);

// In api's almost this type of data is comming
[{}, {}, {}];
