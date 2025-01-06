function News() {
  const newsArticles = [
    {
      title: "Team A Wins Championship",
      content: "In a thrilling match, Team A claimed the championship title.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Soccer_ball.svg",
    },
    {
      title: "Player X Sets New Record",
      content: "Player X achieved an impressive milestone by scoring 50 goals this season.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Football_pitch.svg",
    },
  ];

  return (
    <div className="news">
      <h2>Latest Football News</h2>
      <div className="news-container">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;