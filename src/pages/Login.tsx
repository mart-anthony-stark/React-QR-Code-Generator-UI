import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const [btnDisabled, setbtnDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input name="email" type="text" placeholder="johndoe@gmail.com" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="your password" />
        </div>
        <button disabled={btnDisabled} className="cta">
          LOGIN
        </button>

        <p>
          Doesn't have an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
