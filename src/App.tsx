import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [code, setCode] = useState("");

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  const handleDownload = () => {};

  return (
    <div className="App">
      <div className="container center col">
        <QRCode value={code} className="QR-CODE" />
        <input
          type="text"
          placeholder="Enter your QR code value"
          onChange={handleChange}
        />
        <button onClick={handleDownload}>Save QR Code</button>
      </div>
    </div>
  );
}

export default App;
