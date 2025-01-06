import React from "react";
import "./News.css";

const News = () => {
  return (
    <div className="news">
      <header className="header">
        <h1>Football News</h1>
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
        <section className="news-section">
          <article className="news-article">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Lionel_Messi_vs_Nigeria_2018.jpg"
              alt="Lionel Messi"
              className="news-image"
            />
            <h3>Breaking News: Messi's Incredible Performance</h3>
            <p>
              Lionel Messi continues to break records and impress fans worldwide.
              Check out the highlights from his recent match.
            </p>
            <a href="https://en.wikipedia.org/wiki/Lionel_Messi" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </article>
          <article className="news-article">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Champions_League_Trophy.jpg"
              alt="Champions League"
              className="news-image"
            />
            <h3>Champions League: Quarterfinals Announced</h3>
            <p>
              The draw for the UEFA Champions League quarterfinals has been announced.
              Top teams are ready to face each other.
            </p>
            <a href="https://en.wikipedia.org/wiki/UEFA_Champions_League" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Football World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default News;