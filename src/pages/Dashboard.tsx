import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import AddIcon from "../components/AddIcon";
import QRItem from "../components/QRItem";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [qrCodes, setQrCodes] = useState([]);
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
      <AddIcon />

      <div className="recent">
        <h2>Recent QR Codes</h2>
        <div className="items">
          {qrCodes.length == 0 ? (
            <h2>No items</h2>
          ) : (
            qrCodes.map((code: any) => (
              <QRItem title={code.title} value={code.value} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
