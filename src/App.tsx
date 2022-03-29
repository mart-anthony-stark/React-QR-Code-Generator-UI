import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import AcceptCookies from "./components/AcceptCookies";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [cookieVisible, setCookieVisible] = useState(true);

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
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
