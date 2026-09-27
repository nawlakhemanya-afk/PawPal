import "./App.css";
function Login() {
  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-logo">🐾</div>

        <h1>Welcome to PawPal</h1>

        <p>Login to continue your PawPal journey.</p>

        <form>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="register-text">
          New to PawPal? <span>Register here</span>
        </div>

      </div>

    </div>
  );
}

export default Login;