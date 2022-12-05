import "./App.css";
import { useState } from "react";

function App() {
  let [textCopy, settextCopy] = useState(" ");
  let [lastNameCopy, setLastNameCopy] = useState(" ");
  let [emailCopy, setEmailCopy] = useState(" ");

  const vornameChanger = () => {
    let inputFirstName = 0;
    inputFirstName = document.querySelector(".firstName");
    settextCopy(inputFirstName.value);
  };

  const nachnameChanger = () => {
    let inputLastName;
    inputLastName = document.querySelector(".lastName").value;
    setLastNameCopy(inputLastName);
  };

  const emailChanger = () => {
    let inputEmail = 0;
    inputEmail = document.querySelector(".email");
    setEmailCopy(inputEmail.value);
  };

  return (
    <div className="App">
      <input
        className="firstName"
        type="text"
        placeholder="Vorname"
        onChange={vornameChanger}
      />
      <input
        className="lastName"
        type="text"
        placeholder="Nachname"
        onChange={nachnameChanger}
      />

      <input
        className="email"
        type="text"
        placeholder="Email"
        onChange={emailChanger}
      />
      <br />
      <p>
        Vorname: <span> {textCopy}</span>
      </p>
      <p>
        Nachname: <span> {lastNameCopy}</span>
      </p>
      <p>
        Email: <span>{emailCopy} </span>
      </p>
    </div>
  );
}

export default App;
