import { useEffect, useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [code, setCode] = useState("");
  const [imgSrc, setSrc] = useState("");

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  const handleDownload = () => {};

  const setImageToSVG = () => {
    const svg = document.querySelector(".QR-CODE");

    var xml = new XMLSerializer().serializeToString(svg as Node);
    setSrc("data:image/svg+xml;charset=utf-8," + xml);
  };
  useEffect(() => {
    setImageToSVG();
  }, []);
  return (
    <div className="App">
      <div className="header">
        <h1>QR Code Generator</h1>
      </div>
      <div className="container center col">
        <QRCode value={code} className="QR-CODE" />
        <img src={imgSrc} alt="" />
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
