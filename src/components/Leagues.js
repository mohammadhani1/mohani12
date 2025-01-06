import React from "react";
import "./Leagues.css";

const Leagues = () => {
  return (
    <div className="leagues">
      <header className="header">
        <h1>Football Leagues</h1>
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
        <section className="leagues-section">
          <h2>Top Football Leagues</h2>
          <div className="league-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg"
              alt="Premier League"
              className="league-image"
            />
            <h3>Premier League</h3>
            <p>Country: England</p>
            <p>Top Teams: Manchester City, Liverpool, Manchester United</p>
          </div>
          <div className="league-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/2/2e/La_Liga_logo.svg"
              alt="La Liga"
              className="league-image"
            />
            <h3>La Liga</h3>
            <p>Country: Spain</p>
            <p>Top Teams: Real Madrid, FC Barcelona, Atletico Madrid</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Football World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Leagues;