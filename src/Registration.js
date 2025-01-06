import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <header className="header">
        <h1>Register</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/live-matches">Live Matches</a></li>
            <li><a href="/players">Players</a></li>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/leagues">Leagues</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="register-section">
          <h2>Create a New Account</h2>
          <form className="register-form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter your username" />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
            
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
            
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
            
            <button type="submit">Register</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Football World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Register;