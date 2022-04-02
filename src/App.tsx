import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import AcceptCookies from "./components/AcceptCookies";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { setUser } from "./actions";
import Subscription from "./pages/Subscription";

const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  const [cookieVisible, setCookieVisible] = useState(true);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    const checkLogged = async () => {
      const jwt = localStorage.getItem("token");
      const token = `bearer ${jwt}`;
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/auth/islogged`,
          {
            headers: { token },
          }
        );
        const data = await res.json();

        if (data.user) dispatch(setUser(data.user));
        else dispatch(setUser(null));

        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Could not connect to database");
      }
    };
    checkLogged();
  }, []);

  return (
    <div className="App">
      {!loading && (
        <div>
          <Suspense fallback={<div></div>}>
            <Router>
              <ToastContainer />

              <Navbar />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                  path="/login"
                  element={user ? <Navigate to="/dashboard" /> : <Login />}
                />
                <Route
                  path="/register"
                  element={user ? <Navigate to="/dashboard" /> : <Signup />}
                />
                <Route
                  path="/dashboard"
                  element={user ? <Dashboard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/subscription"
                  element={user ? <Subscription /> : <Navigate to="/login" />}
                />
              </Routes>
            </Router>
          </Suspense>
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
      )}
    </div>
  );
}

export default App;
