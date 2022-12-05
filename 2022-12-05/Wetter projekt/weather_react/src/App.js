import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const api_key = process.env.REACT_APP_KEY;
  console.log(api_key);

  const fetchData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=mainz&appid=${api_key}`
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(fetchData, [api_key]);

  console.log(data);

  return (
    <div className="App">
      <h1>hallo</h1>
    </div>
  );
}

export default App;
