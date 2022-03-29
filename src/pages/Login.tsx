import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [btnDisabled, setbtnDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="login">
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
      </form>
    </div>
  );
};

export default Login;
