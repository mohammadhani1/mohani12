import React from "react";
import "./Players.css";

function Players() {
  const players = [
    {
      name: "Lionel Messi",
      team: "Inter Miami",
      position: "Forward",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Lionel_Messi_2018.jpg",
    },
    {
      name: "Cristiano Ronaldo",
      team: "Al-Nassr",
      position: "Forward",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    },
    {
      name: "Kylian Mbappé",
      team: "Paris Saint-Germain",
      position: "Forward",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kylian_Mbapp%C3%A9_in_2019.jpg",
    },
    {
      name: "Kevin De Bruyne",
      team: "Manchester City",
      position: "Midfielder",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kevin_De_Bruyne_2018.jpg",
    },
  ];

  return (
    <div className="players">
      <h1>Famous Players</h1>
      <div className="players-container">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
            <p><strong>Team:</strong> {player.team}</p>
            <p><strong>Position:</strong> {player.position}</p>
            <a href={`/player-details/${player.name.replaceAll(" ", "-").toLowerCase()}`} className="player-link">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Players;