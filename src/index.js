import React from 'react';
import ReactDOM from 'react-dom/client'; // تأكد من استيراد `react-dom/client`
import './index.css';
import App from './App';

// استخدم `createRoot` بدلاً من `render` في React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// قم بتغليف تطبيقك في StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);