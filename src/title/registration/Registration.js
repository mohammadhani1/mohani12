import React from "react";
import "./registration.css";

function registration() {
  return (
    <div className="registration">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default registration;