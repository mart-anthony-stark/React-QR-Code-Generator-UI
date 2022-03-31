import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.css";

const Login = () => {
  const [btnDisabled, setbtnDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      // DB WORK
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          }
        );

        const data = await res.json();
        if (data.user) {
          localStorage.setItem("token", data.token);
          toast.success("Logged in successfully");
          navigate("/dashboard");
        } else {
          toast.error(data.msg);
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
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
