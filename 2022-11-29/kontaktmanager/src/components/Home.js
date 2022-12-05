import contacts from "./contacts.json";
import { useState } from "react";
import Artistcard from "./Artistcard";

const Home = () => {
  const [artist, setArtist] = useState(contacts);
  //   console.log(artist);

  const sortPopularity = () => {
    let copyArtist = [...artist];
    copyArtist.sort((a, b) => b.popularity - a.popularity);
    setArtist(copyArtist);
  };

  const sortAz = () => {
    let copyArtist = [...artist];
    copyArtist.sort((a, b) => (a.name > b.name) - (a.name < b.name));
    setArtist(copyArtist);
  };

  const sortZa = () => {
    let copyArtist = [...artist];
    copyArtist.sort((a, b) => (b.name > a.name) - (b.name < a.name));
    setArtist(copyArtist);
  };

  return (
    <section>
      <button onClick={sortZa}> Sortieren Z-A</button>
      <button onClick={sortAz}>Sortieren nach A-Z</button>
      <button onClick={sortPopularity}>Sortieren nach Poplularität</button>
      {artist.map((schauspieler, index) => (
        <Artistcard
          key={index}
          name={schauspieler.name}
          popularity={schauspieler.popularity}
          img={schauspieler.pictureUrl}
        />
      ))}
    </section>
  );
};

export default Home;
