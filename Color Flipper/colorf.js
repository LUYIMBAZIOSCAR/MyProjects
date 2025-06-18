let button1 = document.getElementById("but1");
let button2 = document.getElementById("but2");
let button3 = document.getElementById("but3");
let button4 = document.getElementById("rand");
let button5 = document.getElementById("but4");
let body = document.getElementsByTagName("body")[0];
button1.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});
button2.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});
button3.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});
button4.addEventListener("click", () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
button5.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});
