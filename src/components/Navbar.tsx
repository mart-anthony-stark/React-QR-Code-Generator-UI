import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../actions";

export default () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <div className="header">
      <Link to={`${user ? "/dashboard" : "/"}`}>
        <h1>QR Code Generator</h1>
      </Link>

      {!user ? (
        <div className="links">
          <Link to="/login">
            <button className="rounded">Login</button>
          </Link>
          <Link to="/register">
            <button className="rounded cta">Signup</button>
          </Link>
        </div>
      ) : (
        <button className="logout cta" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};
