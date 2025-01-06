import React from "react";
import "./LiveMatches.css";

const LiveMatches = () => {
  return (
    <div className="live-matches">
      <header className="header">
        <h1>Live Matches</h1>
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
        <section className="matches-section">
          <h2>Ongoing Matches</h2>
          <div className="match-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Football_pitch.svg"
              alt="Match Image"
              className="match-image"
            />
            <div className="match-details">
              <h3>Team A vs Team B</h3>
              <p>Score: 2 - 1</p>
              <p>Time: 65'</p>
            </div>
          </div>
          <div className="match-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/88/Soccer_ball.svg"
              alt="Match Image"
              className="match-image"
            />
            <div className="match-details">
              <h3>Team C vs Team D</h3>
              <p>Score: 0 - 0</p>
              <p>Time: 45'</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Football World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LiveMatches;