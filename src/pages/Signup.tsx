import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { setUser } from "../actions";
import { useDispatch } from "react-redux";

const Signup: FC = () => {
  const [btnDisabled, setbtnDisabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
    }

    if (username !== "" && email !== "" && password.length >= 8) {
      const base = import.meta.env.VITE_API_BASE_URL;
      try {
        const res = await fetch(`${base}/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        });

        const data = await res.json();

        console.log(data);
        if (data.success) {
          dispatch(setUser(data.user));
          localStorage.setItem("token", data.token);
          toast.success("Account createed successfully");
          navigate("/dashboard");
        } else {
          toast.error(data.msg || "Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    } else {
      toast.error("All fields are required!");
    }
  };
  return (
    <div className="auth">
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
