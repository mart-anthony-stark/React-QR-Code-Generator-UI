import React, { MouseEventHandler, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccountBadge from "../components/AccountBadge";
import AddIcon from "../components/AddIcon";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";
import Modal from "../components/Modal";
import QRItem from "../components/QRItem";
import "../styles/dashboard.css";
import { TQRCode } from "../types/QR";
import { User } from "../types/User";
import { QrReader } from "react-qr-reader";

const Dashboard = () => {
  const user: User = useSelector((state: any) => state.user);
  const [qrCodes, setQrCodes] = useState([]);
  const [scannedData, setScannedData] = useState("No result");

  const [currentQR, setCurrentQR] = useState<TQRCode>({
    title: "",
    user: "",
    value: "",
  });
  const [showModal, toggleModal] = useState(false);
  const [showEditModal, toggleEditModal] = useState(false);

  // Handle on successful scanning QR Code from webcam
  const handleScan = (result: any) => {
    if (!!result) {
      setScannedData(result?.text);
      console.log(result);
    }
  };

  // Get QR Codes from backend API
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
      <div className="account-info">
        <h3>
          Username: <span>{user.username}</span>
        </h3>
        <AccountBadge type={user.subscription} />
      </div>

      <AddIcon onClick={() => toggleModal(true)} />

      <div className="reader-container">
        <QrReader
          onResult={handleScan}
          videoStyle={{ width: "100px" }}
          constraints={{}}
        />
      </div>

      {showModal && (
        <Modal>
          <AddItem toggleModal={toggleModal} getItems={getItems} user={user} />
        </Modal>
      )}
      {showEditModal && (
        <Modal>
          <EditItem
            QR={currentQR}
            toggleModal={toggleEditModal}
            getItems={getItems}
            user={user}
          />
        </Modal>
      )}

      <div className="recent">
        <h2>Saved QR Codes</h2>
        <div className="items">
          {qrCodes.length == 0 ? (
            <h2>No items</h2>
          ) : (
            qrCodes.map((code: TQRCode) => (
              <div
                onClick={() => {
                  setCurrentQR(code);
                  toggleEditModal(true);
                }}
                key={code._id}
              >
                <QRItem title={code.title} value={code.value} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
