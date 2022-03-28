import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import "../styles/landing.css";

export default () => {
  const [code, setCode] = useState("");
  const [imgSrc, setSrc] = useState("");

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  const handleDownload = () => {
    const svg = document.querySelector(".QR-CODE");
    console.log(svg);
  };

  return (
    <div className="landing-page">
      <div className="header">
        <h1>QR Code Generator</h1>
      </div>
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
};
