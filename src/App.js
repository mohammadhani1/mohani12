import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// استيراد المكونات
import Home from "./title/home/Home";
import LiveMatches from "./title/LIVE/LiveMatches";
import Login from "./title/login/Login";
import News from "./title/News/News";
import Players from "./title/players/Players";
import PlayerDetails from "./title/players/PlayerDetails";
import Clubs from "./title/club/Clubs";
import ClubDetails from "./title/club/ClubDetails";
import Registration from "./title/registration/Registration";
import Leagues from "./title/leagues/Leagues";

// استيراد الأنماط العامة
import "./style.css";

function App() {
  return (
    <Router>
      <div>
        {/* شريط التنقل */}
        <header className="header">
          <h1>Football World</h1>
          <nav className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/live-matches">Live Matches</a></li>
              <li><a href="/players">Players</a></li>
              <li><a href="/clubs">Clubs</a></li>
              <li><a href="/leagues">Leagues</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/registration">Register</a></li>
            </ul>
          </nav>
        </header>

        {/* التوجيهات */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/live-matches" element={<LiveMatches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:id" element={<PlayerDetails />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:id" element={<ClubDetails />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;