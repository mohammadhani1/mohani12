import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <header className="header">
        <h1>Login</h1>
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
        <section className="login-section">
          <h2>Login to Your Account</h2>
          <form className="login-form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter your username" />
            
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
            
            <button type="submit">Login</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Football World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;