import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import AcceptCookies from "./components/AcceptCookies";
import { useState } from "react";

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
      {cookieVisible && <AcceptCookies />}
    </div>
  );
}

export default App;
