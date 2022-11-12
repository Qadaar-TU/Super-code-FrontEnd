// const allElements = document.getElementsByClassName("example");

function myFunction(event) {
  event.preventDefault();

  let div = document.getElementsByClassName("example");
  for (i = 0; i <= div.length; i++) {
    console.log(i);
    div[i].style.backgroundColor = "black";
  }
}
