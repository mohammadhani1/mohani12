import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sections = [
    {
      title: "News",
      description: "Discover the latest updates and stories from the football world.",
      link: "/news",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Football_field_no_lines.svg",
    },
    {
      title: "Live Matches",
      description: "Follow live updates of ongoing matches with detailed stats and commentary.",
      link: "/live-matches",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Soccer_ball_in_net.jpg",
    },
    {
      title: "Players",
      description: "Explore player profiles, stats, and achievements across leagues.",
      link: "/players",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Lionel_Messi_2018.jpg",
    },
    {
      title: "Clubs",
      description: "Discover detailed information about your favorite football teams and their history.",
      link: "/clubs",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Soccer_ball_3.svg",
    },
    {
      title: "Leagues",
      description: "Get information about the top football leagues across the world.",
      link: "/leagues",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
    },
    {
      title: "Login/Register",
      description: "Access your account or register to explore more features.",
      link: "/login",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Login_icon.svg",
    },
  ];

  return (
    <div className={`home ${darkMode ? "dark-mode" : ""}`}>
      <div className="toggle-dark-mode">
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <h1>Welcome to Football World</h1>
      <p>Your Ultimate Football Experience</p>
      <div className="home-grid">
        {sections.map((section, index) => (
          <div key={index} className="home-card">
            <img src={section.image} alt={section.title} />
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <a href={section.link} className="home-link">Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;