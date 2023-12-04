import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavMenu from "./components/NavMenu/NavMenu";
import Home from "./components/sections/Home/Home";
import Projects from "./components/sections/Projects/Projects";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/Home" element={<Home />} />
          <Route caseSensitive path="/Projects" element={<Projects />} />
          <Route caseSensitive path="/About" element={<About />} />
          <Route caseSensitive path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
