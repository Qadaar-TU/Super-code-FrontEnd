fetch(`https://picsum.photos/v2/list`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      //   console.log(element);

      let bild = element.download_url;
      let author = element.author;

      //   1:element erstellen
      let figureElement = document.createElement("figure");
      let figCaption = document.createElement("figcaption");
      let imageElement = document.createElement("img");
      // Möglichkeit 2 die elemente zu erstellen
      // let output = document.querySelector("body");

      //       output.innerHTML +=
      //       <figure>
      //     <img src=${imageLink}>
      //     <figcaption>${imageAuthor}</figcaption>
      // </figure>
      //
      //
      // 2:element befüllen
      figCaption.textContent = author;
      imageElement.src = bild;
      //   3:elemente ins HTML anhängen
      figureElement.appendChild(figCaption);
      figureElement.appendChild(imageElement);
      document.body.appendChild(figureElement);
    });
  });
