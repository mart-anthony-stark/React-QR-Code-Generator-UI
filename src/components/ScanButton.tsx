import { FC } from "react";
import "../styles/add-icon.css";

type Props = {
  onClick?: (e: any) => void;
};

const ScanButton: FC<Props> = ({ onClick }) => {
  return (
    <button className="add-icon scan-button" onClick={onClick}>
      <img className="scan-icon" src="/src/images/scan.png" alt="Scan QR" />
      <h4>Scan QR Code</h4>
    </button>
  );
};

export default ScanButton;
