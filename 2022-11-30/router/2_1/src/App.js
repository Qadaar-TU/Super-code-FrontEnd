import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Kontakt from "./pages/Kontakt";
import Speisekarte from "./pages/Speisekarte";
import Öffnungszeiten from "./pages/Öffnungszeiten";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/galerie" element={<Galerie />}></Route>
          <Route path="/kontakt" element={<Kontakt />}></Route>
          <Route path="/speisekarte" element={<Speisekarte />}></Route>
          <Route path="/öffnungszeiten" element={<Öffnungszeiten />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
