import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaFutbol, FaUsers, FaTrophy, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import "../components/navbar.css";

function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Football World</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/news">
            <FaNewspaper className="icon" /> News
          </Link>
        </li>
        <li>
          <Link to="/live-matches">
            <FaFutbol className="icon" /> Live Matches
          </Link>
        </li>
        <li>
          <Link to="/players">
            <FaUsers className="icon" /> Players
          </Link>
        </li>
        <li>
          <Link to="/clubs">
            <FaTrophy className="icon" /> Clubs
          </Link>
        </li>
        <li>
          <Link to="/leagues">
            <FaTrophy className="icon" /> Leagues
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt className="icon" /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUserPlus className="icon" /> Register
          </Link>
        </li>
      </ul>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;