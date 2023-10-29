import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "../css/Login.css";


function Login({ setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await response.json();

    const result = json.find(
      (user) =>
        user.username === userName &&
        user.address.geo.lat.slice(-4) === password
    );
    setUser(result);
    if (result) {
      window.localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      setError("Your Username or Password is wrong!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              required
              type="text"
              id="userName"
              placeholder="Enter user-name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
