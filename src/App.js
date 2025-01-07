import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import News from "./components/News";
import LiveMatches from "./components/LiveMatches";
import Players from "./components/Players";
import PlayerDetails from "./components/PlayerDetails";
import Clubs from "./components/Clubs";
import ClubDetails from "./components/ClubDetails";
import Leagues from "./components/Leagues";
import Login from "./components/Login";
import Register from "../src/Registration";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/live-matches" element={<LiveMatches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/player-details/:id" element={<PlayerDetails />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/club-details/:id" element={<ClubDetails />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;