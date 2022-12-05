import "./App.css";
import { useState } from "react";

function App() {
  let [darkMode, setdarkMode] = useState(true);

  const tag = () => {
    // setdarkMode((prevCheck) => !prevCheck)
    setdarkMode(!darkMode);
    console.log(darkMode);

    if (darkMode) {
      document.querySelector(".App").style.backgroundColor = "blue";
      document.querySelector("h1").innerHTML = "Es ist Nacht 🌝";
      document.querySelector("button").innerHTML = "Wechsel zu Tag";
    } else {
      document.querySelector(".App").style.backgroundColor = "yellow";
      document.querySelector("h1").innerHTML = "Es ist Tag  🌞";
      document.querySelector("button").innerHTML = "Wechsel zu Nacht";
    }
  };

  return (
    <div className="App">
      <h1>Es ist Tag 🌞</h1>

      <button onClick={tag}>Wechsel zu Nacht</button>
    </div>
  );
}

export default App;
