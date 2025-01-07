import React from "react";
import "./News.css";

function News() {
  const newsData = [
    {
      title: "Exciting Matches Coming This Week",
      description: "Stay tuned for thrilling matches as the best teams compete worldwide!",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Soccer_ball_in_net.jpg",
      link: "#",
    },
    {
      title: "Messi Breaks Another Record",
      description: "Lionel Messi sets a new record for the most goals scored in international matches.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Lionel_Messi_2018.jpg",
      link: "#",
    },
    {
      title: "Transfer Market Updates",
      description: "Discover the latest updates and rumors from the football transfer market.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Football_goal_icon.svg",
      link: "#",
    },
  ];

  return (
    <div className="news">
      <h1>Football News</h1>
      <div className="news-container">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.image} alt={news.title} />
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <a href={news.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;