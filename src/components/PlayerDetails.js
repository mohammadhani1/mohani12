import React from "react";
import "./PlayerDetails.css";

function PlayerDetails() {
  const player = {
    name: "Lionel Messi",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Lionel_Messi_2018.jpg",
    team: "Inter Miami",
    position: "Forward",
    age: 36,
    nationality: "Argentina",
    stats: {
      goals: 804,
      assists: 400,
      appearances: 1003,
    },
    bio: "Lionel Messi is an Argentine professional footballer who plays as a forward. Widely regarded as one of the greatest players of all time, Messi has won numerous awards including 7 Ballon d'Or titles.",
  };

  return (
    <div className="player-details">
      <div className="player-header">
        <img src={player.image} alt={player.name} />
        <h1>{player.name}</h1>
        <h3>{player.team}</h3>
      </div>
      <div className="player-info">
        <div className="bio">
          <h2>Biography</h2>
          <p>{player.bio}</p>
        </div>
        <div className="details">
          <h2>Details</h2>
          <p><strong>Position:</strong> {player.position}</p>
          <p><strong>Age:</strong> {player.age}</p>
          <p><strong>Nationality:</strong> {player.nationality}</p>
        </div>
        <div className="stats">
          <h2>Statistics</h2>
          <p><strong>Goals:</strong> {player.stats.goals}</p>
          <p><strong>Assists:</strong> {player.stats.assists}</p>
          <p><strong>Appearances:</strong> {player.stats.appearances}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;