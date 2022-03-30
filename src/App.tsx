import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import AcceptCookies from "./components/AcceptCookies";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { setUser } from "./actions";

function App() {
  const [cookieVisible, setCookieVisible] = useState(true);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    const checkLogged = async () => {
      const res = "";
      const data = { logged: false, user: null };

      if (data.user) dispatch(setUser(data.user));
    };
    checkLogged();
  }, []);

  return (
    <div className="App">
      <Router>
        <ToastContainer />

        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
      <AnimatePresence>
        {cookieVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0 }}
          >
            <AcceptCookies setVisible={setCookieVisible} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
