import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import "../styles/landing.css";
import { handleDownload } from "../utils/download";

export default () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  return (
    <div className="landing-page">
      <div className="container center col">
        <QRCode
          value={code}
          className="QR-CODE"
          title={title}
          download={<button>Download</button>}
        />

        <input
          type="text"
          placeholder="Enter your QR code value"
          onChange={handleChange}
        />
        <button onClick={() => handleDownload({ selector: ".QR-CODE" })}>
          Download QR Code
        </button>
      </div>
    </div>
  );
};
