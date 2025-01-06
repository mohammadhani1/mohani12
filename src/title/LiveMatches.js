import React, { useState, useEffect } from 'react';

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // بيانات المباريات المباشرة كمثال
    const fetchedMatches = [
      { id: 1, teams: 'برشلونة × ريال مدريد', score: '2-1' },
      { id: 2, teams: 'مانشستر يونايتد × ليفربول', score: '1-1' },
    ];
    setMatches(fetchedMatches);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>جاري تحميل المباريات...</p>;
  }

  return (
    <div>
      <h2>المباريات المباشرة</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <strong>{match.teams}</strong> - {match.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveMatches;