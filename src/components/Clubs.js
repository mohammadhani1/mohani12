import React from "react";
import "./Clubs.css";

function Clubs() {
  const clubs = [
    {
      name: "Real Madrid",
      country: "Spain",
      stadium: "Santiago Bernabéu",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    },
    {
      name: "Barcelona",
      country: "Spain",
      stadium: "Camp Nou",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    },
    {
      name: "Manchester United",
      country: "England",
      stadium: "Old Trafford",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    },
    {
      name: "Paris Saint-Germain (PSG)",
      country: "France",
      stadium: "Parc des Princes",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    },
  ];

  return (
    <div className="clubs">
      <h1>Famous Football Clubs</h1>
      <div className="clubs-container">
        {clubs.map((club, index) => (
          <div key={index} className="club-card">
            <img src={club.logo} alt={club.name} />
            <h3>{club.name}</h3>
            <p><strong>Country:</strong> {club.country}</p>
            <p><strong>Stadium:</strong> {club.stadium}</p>
            <a href={`/club-details/${club.name.replaceAll(" ", "-").toLowerCase()}`} className="club-link">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;