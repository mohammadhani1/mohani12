import React, { useState, useEffect } from 'react';
import { fetchNews } from '../title/Api';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      setNews(data.competitions || []);
      setLoading(false);
    };

    getNews();
  }, []);

  const filteredNews = news.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>آخر الأخبار</h2>
      <input
        type="text"
        placeholder="ابحث عن الأخبار..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="news-slider">
        {loading ? (
          <p>جاري تحميل الأخبار...</p>
        ) : filteredNews.length === 0 ? (
          <p>لا توجد أخبار حالياً لعرضها.</p>
        ) : (
          filteredNews.map((item) => (
            <div className="news-item" key={item.id}>
              <img
                src="https://source.unsplash.com/150x150/?football"
                alt={item.name}
                style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }}
              />
              <strong>{item.name}</strong> - {item.area.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;