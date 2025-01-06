import React from "react";
import "./PlayerDetails.css";

function PlayerDetails({ player }) {
  const samplePlayer = {
    name: "Lionel Messi",
    image: "/images/messi.png",
    team: "Inter Miami",
    stats: {
      goals: 800,
      assists: 300,
      matches: 1000,
    },
    bio: "Lionel Messi is an Argentine professional footballer who plays as a forward.",
  };

  const currentPlayer = player || samplePlayer;

  return (
    <div className="player-details">
      <img src={currentPlayer.image} alt={currentPlayer.name} />
      <h2>{currentPlayer.name}</h2>
      <p><strong>Team:</strong> {currentPlayer.team}</p>
      <div className="stats">
        <h3>Statistics</h3>
        <p><strong>Goals:</strong> {currentPlayer.stats.goals}</p>
        <p><strong>Assists:</strong> {currentPlayer.stats.assists}</p>
        <p><strong>Matches:</strong> {currentPlayer.stats.matches}</p>
      </div>
      <p className="bio">{currentPlayer.bio}</p>
    </div>
  );
}

export default PlayerDetails;