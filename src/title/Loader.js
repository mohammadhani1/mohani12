import React from 'react';
import '../stayle.css/style.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>جاري التحميل...</p>
    </div>
  );
};

export default Loader;