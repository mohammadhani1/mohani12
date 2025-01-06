function LiveMatches() {
  const matches = [
    {
      teams: "Manchester City vs Real Madrid",
      score: "2 - 1",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Football_field_no_lines.svg",
    },
    {
      teams: "Barcelona vs Bayern Munich",
      score: "1 - 1",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Football_stadium_icon.svg",
    },
  ];

  return (
    <div className="live-matches">
      <h2>Live Matches</h2>
      <div className="matches-container">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <img src={match.image} alt={match.teams} />
            <h3>{match.teams}</h3>
            <p><strong>Score:</strong> {match.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveMatches;