import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="App">
      <QRCode value="hey" />
    </div>
  );
}

export default App;
