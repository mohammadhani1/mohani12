import React from "react";
import "./Clubs.css";

const Clubs = () => {
  return (
    <div className="clubs">
      <header className="header">
        <h1>Top Football Clubs</h1>
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
        <section className="clubs-section">
          <h2>Explore Famous Clubs</h2>
          <div className="club-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/FC_Barcelona_crest.svg"
              alt="FC Barcelona"
              className="club-image"
            />
            <h3>FC Barcelona</h3>
            <p>Country: Spain</p>
            <p>Achievements: 26 La Liga Titles, 5 Champions League Titles</p>
          </div>
          <div className="club-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Real_Madrid_CF.svg"
              alt="Real Madrid"
              className="club-image"
            />
            <h3>Real Madrid</h3>
            <p>Country: Spain</p>
            <p>Achievements: 35 La Liga Titles, 14 Champions League Titles</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Football World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Clubs;