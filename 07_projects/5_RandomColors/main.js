const start = document.getElementById("start");
const stop = document.getElementById("stop");
let res = document.getElementById("res");
const body = document.body;
let initialVal = null;

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ChangeBgColor = function () {
  const hold = (body.style.backgroundColor = randomColor());
  res.textContent = hold;
};

const startChangingColor = function () {
  initialVal = setInterval(() => {
    ChangeBgColor();
  }, 1500);
};
const stopChangingColor = function () {
  clearInterval(initialVal);
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
