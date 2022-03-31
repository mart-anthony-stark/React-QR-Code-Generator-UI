import QRCode from "react-qr-code";
import QRItem from "../components/QRItem";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="add-icon">
        <div className="plus">+</div>
        <h4>Add New QR Code</h4>
      </div>

      <div className="recent">
        <h2>Recent QR Codes</h2>
        <div className="items">
          <QRItem title="Mart" value="asldh" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
