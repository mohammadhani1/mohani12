import React from "react";
import "./LiveMatches.css";

function LiveMatches() {
  const matches = [
    {
      team1: "Real Madrid",
      team2: "Barcelona",
      score: "2 - 1",
      time: "55'",
      league: "La Liga",
      image1: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      image2: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    },
    {
      team1: "Manchester United",
      team2: "Manchester City",
      score: "1 - 3",
      time: "Full Time",
      league: "Premier League",
      image1: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
      image2: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    },
    {
      team1: "Paris Saint-Germain (PSG)",
      team2: "Marseille",
      score: "0 - 0",
      time: "Half Time",
      league: "Ligue 1",
      image1: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
      image2: "https://upload.wikimedia.org/wikipedia/en/d/d8/Olympique_de_Marseille_logo.svg",
    },
  ];

  return (
    <div className="live-matches">
      <h1>Live Matches</h1>
      <div className="matches-container">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <h3>{match.league}</h3>
            <div className="teams">
              <div className="team">
                <img src={match.image1} alt={match.team1} />
                <p>{match.team1}</p>
              </div>
              <div className="score">
                <p>{match.score}</p>
                <p>{match.time}</p>
              </div>
              <div className="team">
                <img src={match.image2} alt={match.team2} />
                <p>{match.team2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveMatches;