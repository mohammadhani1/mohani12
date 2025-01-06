import React from "react";
import "./ClubDetails.css";

function ClubDetails({ club }) {
  const sampleClub = {
    name: "Barcelona",
    image: "/images/barcelona.png",
    stadium: "Camp Nou",
    founded: 1899,
    description: "One of the most successful football clubs in history, known for its tiki-taka style of play.",
  };

  const currentClub = club || sampleClub;

  return (
    <div className="club-details">
      <img src={currentClub.image} alt={currentClub.name} />
      <h2>{currentClub.name}</h2>
      <p><strong>Stadium:</strong> {currentClub.stadium}</p>
      <p><strong>Founded:</strong> {currentClub.founded}</p>
      <p className="description">{currentClub.description}</p>
    </div>
  );
}

export default ClubDetails;