import "./App.css";
import { useState } from "react";

function App() {
  let [geldBetrag, setGeldbetrag] = useState(0);

  const einzahlen = () => {
    let inputEinzahlen;
    inputEinzahlen = Number(document.querySelector("#userInput").value);
    setGeldbetrag(inputEinzahlen + geldBetrag);
  };

  const auszahlen = () => {
    let inputEinzahlen;
    inputEinzahlen = Number(document.querySelector("#userInput").value);
    setGeldbetrag(geldBetrag - inputEinzahlen);
  };

  return (
    <div className="App">
      <body>
        <header>
          <h1 id="title">Banana Bank</h1>
        </header>
        <div className="konto">
          <h2>Dein Girokonto</h2>
          <h3 className="saldo">
            <span> {geldBetrag}</span> €
          </h3>
          <input
            type="number"
            name=""
            id="userInput"
            placeholder="Gib einen Geldbetrag ein"
          />
          <br />
          <button onClick={einzahlen} className="einzahlen">
            Einzahlen
          </button>
          <button onClick={auszahlen} className="auszahlen">
            Auszahlen
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
