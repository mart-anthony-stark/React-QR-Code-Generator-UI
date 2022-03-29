import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [btnDisabled, setbtnDisabled] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username !== "" && email !== "" && password !== "") {
      const base = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${base}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      console.log(data);
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success("Account createed successfully");
      } else {
        toast.error(data.msg || "Something went wrong");
      }
    } else {
      toast.error("All fields are required!");
    }
  };
  return (
    <div className="auth">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Create An Account!</h1>

        <div className="field">
          <label htmlFor="email">Name</label>
          <input
            name="username"
            type="text"
            placeholder="John Doe"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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
          SIGNUP
        </button>

        <p>
          Doesn't have an account?{" "}
          <Link to="/login">
            <span>Signin</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
