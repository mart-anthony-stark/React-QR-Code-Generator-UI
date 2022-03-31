import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default () => {
  const user = useSelector((state: any) => state.user);

  return (
    <div className="header">
      <Link to="/">
        <h1>QR Code Generator</h1>
      </Link>

      {!user && (
        <div className="links">
          <Link to="/login">
            <button className="rounded">Login</button>
          </Link>
          <Link to="/register">
            <button className="rounded cta">Signup</button>
          </Link>
        </div>
      )}
    </div>
  );
};
