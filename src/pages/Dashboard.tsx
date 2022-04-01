import React, { MouseEventHandler, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddIcon from "../components/AddIcon";
import AddItem from "../components/AddItem";
import Modal from "../components/Modal";
import QRItem from "../components/QRItem";
import "../styles/dashboard.css";
import { TQRCode } from "../types/QR";
import { User } from "../types/User";

const Dashboard = () => {
  const user: User = useSelector((state: any) => state.user);
  const [qrCodes, setQrCodes] = useState([]);
  const [showModal, toggleModal] = useState(false);

  const getItems = async () => {
    const token = localStorage.getItem("token");
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/qr/all/${user._id}`;
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
      <AddIcon onClick={() => toggleModal(true)} />
      {showModal && (
        <Modal>
          <AddItem toggleModal={toggleModal} getItems={getItems} user={user} />
        </Modal>
      )}

      <div className="recent">
        <h2>Recent QR Codes</h2>
        <div className="items">
          {qrCodes.length == 0 ? (
            <h2>No items</h2>
          ) : (
            qrCodes.map((code: TQRCode) => (
              <QRItem title={code.title} value={code.value} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
