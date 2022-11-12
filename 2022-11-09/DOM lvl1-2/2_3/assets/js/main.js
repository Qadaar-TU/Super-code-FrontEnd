const aTags = document.getElementsByTagName("a");

const pacMAn = () => {
  console.log(aTags);
  for (let index = 0; index < aTags.length; index++) {
    aTags[0].style.backgroundColor = "red";
    aTags[1].style.backgroundColor = "green";
    aTags[2].style.backgroundColor = "blue";
    aTags[3].style.backgroundColor = "orange";
    //
    // aTags[0].style.color = "#666";
    // aTags[1].style.color = "#666";
    // aTags[2].style.color = "#666";
    // aTags[3].style.color = "#666";
    // oder:
    aTags[index].style.color = "#666";
  }
};
