import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="header">
      <h1>QR Code Generator</h1>

      <div className="links">
        <Link to="/login">
          <button className="rounded">Login</button>
        </Link>
        <Link to="/register">
          <button className="rounded cta">Signup</button>
        </Link>
      </div>
    </div>
  );
};
