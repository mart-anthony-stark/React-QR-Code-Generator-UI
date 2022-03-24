import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [code, setCode] = useState("");

  return (
    <div className="App">
      <QRCode value={code} />
      <input type="text" placeholder="Enter your qrcode value" />
    </div>
  );
}

export default App;
