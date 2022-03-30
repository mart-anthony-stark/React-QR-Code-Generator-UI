import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.css";

const Login = () => {
  const [btnDisabled, setbtnDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      // DB WORK
    } else {
      toast.error("All fields must be filled!");
    }
  };
  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
