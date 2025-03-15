import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Startseite from "./Startseite";
import UeberMich from "./UeberMich";
import Projekte from "./Projekte";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Startseite />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            <Route path="/projekte" element={<Projekte />} />
          </Routes>
        </header>
        <Footer />
      </div>
    </Router>
  );
}
