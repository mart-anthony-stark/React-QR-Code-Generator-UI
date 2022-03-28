import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import "../styles/landing.css";

export default () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [imgSrc, setSrc] = useState("");

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  const handleDownload = () => {
    const svg = document.querySelector(".QR-CODE") as Node;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = title || "QR Code";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
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
        <button onClick={handleDownload}>Save QR Code</button>
      </div>
    </div>
  );
};
