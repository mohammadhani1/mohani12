function Leagues() {
  const leagues = [
    {
      name: "English Premier League",
      country: "England",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
    },
    {
      name: "La Liga",
      country: "Spain",
      image: "https://upload.wikimedia.org/wikipedia/en/7/71/La_Liga.svg",
    },
    {
      name: "Bundesliga",
      country: "Germany",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Bundesliga_logo_%282017%29.svg",
    },
  ];

  return (
    <div className="leagues">
      <h2>Top Football Leagues</h2>
      <div className="leagues-container">
        {leagues.map((league, index) => (
          <div key={index} className="league-card">
            <img src={league.image} alt={league.name} />
            <h3>{league.name}</h3>
            <p><strong>Country:</strong> {league.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leagues;