import React from "react";
import "./home.css";

function home() {
  return (
    <div className="home">
      <h2>Welcome to Football World</h2>
      <p>
        Discover the latest news, leagues, players, and live matches from the football world. Stay updated and enjoy an interactive experience.
      </p>
      <div className="features">
        <div className="feature">
          <img src="/images/live-matches.png" alt="Live Matches" />
          <h3>Live Matches</h3>
          <p>Follow live updates of ongoing matches with detailed stats and commentary.</p>
        </div>
        <div className="feature">
          <img src="/images/players.png" alt="Players" />
          <h3>Top Players</h3>
          <p>Explore player profiles, stats, and achievements across leagues.</p>
        </div>
        <div className="feature">
          <img src="/images/news.png" alt="News" />
          <h3>Breaking News</h3>
          <p>Get the latest updates and stories from the football world.</p>
        </div>
      </div>
    </div>
  );
}

export default home;