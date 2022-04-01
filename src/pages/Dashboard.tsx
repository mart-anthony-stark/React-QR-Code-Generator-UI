import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import AddIcon from "../components/AddIcon";
import Modal from "../components/Modal";
import QRItem from "../components/QRItem";
import "../styles/dashboard.css";
import { TQRCode } from "../types/QR";

const Dashboard = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const [showModal, toggleModal] = useState(true);
  const [editQR, setEditQR] = useState<TQRCode>({
    title: "",
    user: "",
    value: "",
  });
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

  const handleAddItem = (e: MouseEvent) => {
    console.log(e.target);
  };

  return (
    <div className="dashboard">
      <AddIcon onClick={handleAddItem} />
      {showModal && (
        <Modal>
          <div className="addItem">
            <h2 className="pri-light">Create New QR Code</h2>
            <QRCode value={editQR?.value} />
          </div>
        </Modal>
      )}

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
