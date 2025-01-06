import React, { useState, useEffect } from 'react';

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // إذا كنت ترغب في جلب البيانات من API، قم باستخدام fetch أو Axios
    // هنا نعرض بيانات ثابتة كمثال
    const fetchedLeagues = [
      { id: 1, name: 'الدوري الإنجليزي الممتاز' },
      { id: 2, name: 'دوري أبطال أوروبا' },
      { id: 3, name: 'الدوري الإسباني' },
    ];
    setLeagues(fetchedLeagues);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>جاري تحميل البطولات...</p>;
  }

  return (
    <div>
      <h2>البطولات</h2>
      <ul>
        {leagues.map((league) => (
          <li key={league.id}>
            <strong>{league.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leagues;