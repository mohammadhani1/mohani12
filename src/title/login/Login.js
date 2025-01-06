function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Login_icon.svg"
        alt="Login Icon"
        style={{ width: "100px", marginBottom: "20px" }}
      />
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;