import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h2>مرحبًا بك في عالم كرة القدم!</h2>
      <p>تابع آخر أخبار البطولات والمباريات مباشرة من هنا.</p>

      <div>
        <img
          src="https://source.unsplash.com/800x400/?football"  /* رابط صورة حية من الإنترنت */
          alt="Football Image"
          style={{ width: '80%', borderRadius: '15px', marginBottom: '2rem' }}
        />
      </div>
    </div>
  );
};

export default Home;