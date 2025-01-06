import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // بيانات الأندية كمثال
    const fetchedClubs = [
      { id: 1, name: 'ريال مدريد', achievements: '13 دوري أبطال أوروبا' },
      { id: 2, name: 'برشلونة', achievements: '5 دوري أبطال أوروبا' },
      { id: 3, name: 'مانشستر يونايتد', achievements: '3 دوري أبطال أوروبا' },
    ];
    setClubs(fetchedClubs);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>جاري تحميل الأندية...</p>;
  }

  return (
    <div>
      <h2>الأندية</h2>
      <ul>
        {clubs.map((club) => (
          <li key={club.id}>
            <strong>{club.name}</strong> - {club.achievements}
            <br />
            <Link to={`/club/${club.id}`} style={{ color: '#ff4b2b', textDecoration: 'underline' }}>
              عرض التفاصيل
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clubs;