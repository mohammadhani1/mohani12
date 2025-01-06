import React, { useState, useEffect } from 'react';
import './stayle.css/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './title/Home';
import News from './title/News';
import Leagues from './title/Leagues';
import Players from './title/Players';
import LiveMatches from './title/LiveMatches';
import Clubs from './title/Clubs';
import Registration from './title/Registration';
import ClubDetails from './title/ClubDetails';
import Loader from './title/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ar'); // اللغة الافتراضية هي العربية

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar');

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // محاكاة تحميل البيانات
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <h1>{language === 'ar' ? 'مرحبًا بك في عالم كرة القدم!' : 'Welcome to the World of Football!'}</h1>
            <nav>
              <Link to="/">{language === 'ar' ? 'الرئيسية' : 'Home'}</Link>
              <Link to="/news">{language === 'ar' ? 'الأخبار' : 'News'}</Link>
              <Link to="/leagues">{language === 'ar' ? 'البطولات' : 'Leagues'}</Link>
              <Link to="/players">{language === 'ar' ? 'اللاعبين' : 'Players'}</Link>
              <Link to="/live-matches">{language === 'ar' ? 'المباريات المباشرة' : 'Live Matches'}</Link>
              <Link to="/clubs">{language === 'ar' ? 'الأندية' : 'Clubs'}</Link>
              <Link to="/registration">{language === 'ar' ? 'التسجيل' : 'Registration'}</Link>
            </nav>
            <button onClick={toggleDarkMode} className="mode-toggle">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button onClick={toggleLanguage} className="mode-toggle">
              {language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            </button>
          </header>
          <main className={darkMode ? 'dark' : 'light'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/leagues" element={<Leagues />} />
              <Route path="/players" element={<Players />} />
              <Route path="/live-matches" element={<LiveMatches />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/club/:id" element={<ClubDetails />} />
             
            </Routes>
          </main>
          <footer>
            <p>{language === 'ar' ? '© 2025 عالم كرة القدم. جميع الحقوق محفوظة.' : '© 2025 Football World. All rights reserved.'}</p>
          </footer>
        </>
      )}
    </Router>
  );
};

export default App;