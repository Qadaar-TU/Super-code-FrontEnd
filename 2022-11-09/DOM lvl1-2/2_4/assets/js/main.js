const selectElement = document.getElementById("farbeAuswahlen");
const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(selectElement.selectedIndex);

  //   Möglichkeit 1
  switch (selectElement.selectedIndex) {
    case 0:
      document.body.style.backgroundColor = "mediumorchid";
      break;
    case 1:
      document.body.style.backgroundColor = "mintcream";
      break;
    case 2:
      document.body.style.backgroundColor = "dodgerblue";
      break;
  }
  // Möglichlkeit von Steffen
  // let bodyBgColor = bgColor.value.split(" ");
  // document.body.style.backgroundColor = bodyBgColor.join("");
});
