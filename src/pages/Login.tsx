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
        <div className="field">
          <input type="text" placeholder="johndoe@gmail.com" />
        </div>
        <div className="field">
          <input type="text" placeholder="your password" />
        </div>
        <button disabled={btnDisabled} className="cta">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
