import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import LiveMatches from "./components/LiveMatches";
import Players from "./components/Players";
import Clubs from "./components/Clubs";
import Leagues from "./components/Leagues";
import Login from "./components/Login";
import Register from "./Registration";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/live-matches" element={<LiveMatches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;