function Players() {
  return (
    <div className="players">
      <h2>Famous Players</h2>
      <div className="players-container">
        <div className="player-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Lionel_Messi_20180626.jpg"
            alt="Lionel Messi"
          />
          <h3>Lionel Messi</h3>
          <p><strong>Team:</strong> Inter Miami</p>
          <p>Argentine legend and one of the greatest players in history.</p>
        </div>
        <div className="player-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Cristiano_Ronaldo_2018.jpg"
            alt="Cristiano Ronaldo"
          />
          <h3>Cristiano Ronaldo</h3>
          <p><strong>Team:</strong> Al-Nassr</p>
          <p>Portuguese superstar with numerous records to his name.</p>
        </div>
        <div className="player-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Kylian_Mbapp%C3%A9_%28cropped%29.jpg"
            alt="Kylian Mbappé"
          />
          <h3>Kylian Mbappé</h3>
          <p><strong>Team:</strong> Paris Saint-Germain</p>
          <p>Young and talented French forward with incredible speed.</p>
        </div>
      </div>
    </div>
  );
}

export default Players;