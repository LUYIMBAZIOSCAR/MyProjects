let input = document.getElementById("input");
let button = document.getElementById("btn");
let response = document.getElementById("response");

function setString(str) {
  return str.split("").reverse("").join("");
}

button.addEventListener("click", () => {
  let value = input.value;
  let reversed = setString(value);
  if (reversed === value) {
    response.textContent = `It is a palindrome`;
  } else {
    response.textContent = `It is not a palindrome`;
  }
  input.value = "";
});
