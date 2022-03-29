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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ username, email, password });
    if (username !== "" && email !== "" && password !== "") {
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
