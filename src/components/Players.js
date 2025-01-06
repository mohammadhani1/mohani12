import React from "react";
import "./Players.css";

const Players = () => {
  return (
    <div className="players">
      <header className="header">
        <h1>Top Football Players</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/live-matches">Live Matches</a></li>
            <li><a href="/players">Players</a></li>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/leagues">Leagues</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="players-section">
          <h2>Player Profiles</h2>
          <div className="player-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Cristiano_Ronaldo_2018.jpg"
              alt="Cristiano Ronaldo"
              className="player-image"
            />
            <h3>Cristiano Ronaldo</h3>
            <p>Position: Forward</p>
            <p>Achievements: 5 Ballon d'Or Awards, 700+ Career Goals</p>
          </div>
          <div className="player-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/Lionel_Messi_20180626.jpg"
              alt="Lionel Messi"
              className="player-image"
            />
            <h3>Lionel Messi</h3>
            <p>Position: Forward</p>
            <p>Achievements: 7 Ballon d'Or Awards, FIFA World Cup Winner 2022</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Football World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Players;