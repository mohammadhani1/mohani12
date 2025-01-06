import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to Football World</h1>
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
        <section className="hero">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_in_the_stadium.jpg"
            alt="Football Stadium"
            className="hero-image"
          />
          <h2>Your Ultimate Football Experience</h2>
        </section>

        <section className="features">
          <div className="feature">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/FC_Barcelona_Team_%28cropped%29.jpg"
              alt="Football Team"
              className="feature-image"
            />
            <h3>Explore Teams</h3>
            <p>Discover detailed information about your favorite football teams and their history.</p>
          </div>
          <div className="feature">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Stadium_football.jpg"
              alt="Stadium"
              className="feature-image"
            />
            <h3>Match Highlights</h3>
            <p>Catch up on the latest match highlights and relive the best moments of the season.</p>
          </div>
          <div className="feature">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Cristiano_Ronaldo_2018.jpg"
              alt="Player"
              className="feature-image"
            />
            <h3>Top Players</h3>
            <p>Get to know the stars of football, their stats, and achievements across leagues.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Football World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;