import React from "react";
import "./ClubDetails.css";

function ClubDetails() {
  const club = {
    name: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    founded: 1902,
    stadium: "Santiago Bernabéu",
    capacity: "81,044",
    country: "Spain",
    trophies: [
      { name: "La Liga", count: 35 },
      { name: "Champions League", count: 14 },
      { name: "Copa del Rey", count: 19 },
    ],
    history: "Real Madrid is one of the most successful football clubs in the world, known for its dominance in La Liga and the Champions League.",
  };

  return (
    <div className="club-details">
      <div className="club-header">
        <img src={club.logo} alt={club.name} />
        <h1>{club.name}</h1>
        <h3>{club.country}</h3>
      </div>
      <div className="club-info">
        <div className="history">
          <h2>History</h2>
          <p>{club.history}</p>
        </div>
        <div className="details">
          <h2>Details</h2>
          <p><strong>Founded:</strong> {club.founded}</p>
          <p><strong>Stadium:</strong> {club.stadium}</p>
          <p><strong>Capacity:</strong> {club.capacity}</p>
        </div>
        <div className="trophies">
          <h2>Trophies</h2>
          <ul>
            {club.trophies.map((trophy, index) => (
              <li key={index}>
                <strong>{trophy.name}:</strong> {trophy.count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClubDetails;