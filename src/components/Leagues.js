import React from "react";
import "./Leagues.css";

function Leagues() {
  const leagues = [
    {
      name: "Premier League",
      country: "England",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
    },
    {
      name: "La Liga",
      country: "Spain",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cf/LaLiga.svg",
    },
    {
      name: "Bundesliga",
      country: "Germany",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
    },
    {
      name: "Serie A",
      country: "Italy",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg",
    },
  ];

  return (
    <div className="leagues">
      <h1>Top Football Leagues</h1>
      <div className="leagues-container">
        {leagues.map((league, index) => (
          <div key={index} className="league-card">
            <img src={league.logo} alt={league.name} />
            <h3>{league.name}</h3>
            <p><strong>Country:</strong> {league.country}</p>
            <a href={`/league-details/${league.name.replaceAll(" ", "-").toLowerCase()}`} className="league-link">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leagues;