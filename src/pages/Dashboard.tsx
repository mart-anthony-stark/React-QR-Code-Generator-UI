import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import QRItem from "../components/QRItem";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [qrCodes, setQrCodes] = useState();
  const user = useSelector((state: any) => state.user);

  const getItems = async () => {
    const token = localStorage.getItem("token");
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/qr/all/${user._id}`;
    console.log(endpoint);
    const res = await fetch(endpoint, {
      headers: { token: `bearer ${token}` },
    });

    const data = await res.json();
    setQrCodes(data);
  };

  useEffect(() => {
    getItems();
  }, []);

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
