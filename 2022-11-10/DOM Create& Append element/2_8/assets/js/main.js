const inputFeld = document.getElementById("userinput");
const button = document.getElementById("enter");
const output = document.querySelectorAll("li");

console.log(output);

button.addEventListener("click", (event) => {
  event.preventDefault();
  let li = document.createElement("li");
  li.textContent = inputFeld.value;
  document.body.firstElementChild.lastElementChild.appendChild(li);
});
