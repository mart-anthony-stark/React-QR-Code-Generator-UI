import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/landing.css";
import { handleDownload } from "../utils/download";

export default () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  const handleDownload = () => {
    navigate("/login");
    toast.info("You must login first");
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
        <button onClick={handleDownload}>Download QR Code</button>
      </div>
    </div>
  );
};
