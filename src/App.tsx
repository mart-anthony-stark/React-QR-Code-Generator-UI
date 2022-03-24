import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [code, setCode] = useState("");

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  const handleDownload = () => {
    console.log(document.querySelector(".QR-CODE"));
  };

  return (
    <div className="App">
      <QRCode value={code} className="QR-CODE" />
      <input
        type="text"
        placeholder="Enter your qrcode value"
        onChange={handleChange}
      />
      <button onClick={handleDownload}>Save QR Code</button>
    </div>
  );
}

export default App;
