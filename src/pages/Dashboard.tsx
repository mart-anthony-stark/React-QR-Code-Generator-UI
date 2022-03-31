import QRCode from "react-qr-code";
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
          <div className="item">
            <QRCode className="" value="Mart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
