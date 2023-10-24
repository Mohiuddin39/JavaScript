const promise1 = new Promise(function (res, rej) {
  setTimeout(() => {
    console.log("Promise 1 ");
    res();
  }, 1000);
});

promise1.then(function () {
  console.log("promisae 1, is Resolved");
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Promise 2");
    res();
  }, 1000);
});

promise2.then(() => {
  console.log("Promise 2, is Resolved");
});

// passing values to resolve
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res({ username: "MohiudDin", email: "mohiuddin@gmail.com" });
  });
});
promise3.then((user) => {
  console.log(user);
});

// Now we are look Both Resolve and Reject

const promise4 = new Promise((res, rej) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      res({ name: "MohiudDin", email: "Example@gmail.com" });
    } else {
      rej("ERROR: Something Went wrong");
    }
  });
});

// promise4
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//some chainng concept
promise4
  .then((value) => {
    return value.name;
  })
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// try catch

const promise5 = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ name: "JavaScript", email: "js@gmail.com" });
    } else {
      rej("ERROR: JS Went wrong");
    }
  });
});

async function Promise5Conusmed() {
  try {
    const responce = await promise5;
    console.log(responce);
  } catch (error) {
    console.log("NewERROR: ", error);
  }
}
Promise5Conusmed();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();
