import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="header">
      <h1>QR Code Generator</h1>

      <div className="links">
        <button className="rounded">
          <Link to="/login">Login</Link>
        </button>
        <button className="rounded cta">
          <Link to="/register">Signup</Link>
        </button>
      </div>
    </div>
  );
};
