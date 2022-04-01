import React, { MouseEventHandler, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddIcon from "../components/AddIcon";
import Modal from "../components/Modal";
import QRItem from "../components/QRItem";
import "../styles/dashboard.css";
import { TQRCode } from "../types/QR";

const Dashboard = () => {
  const user = useSelector((state: any) => state.user);
  const [qrCodes, setQrCodes] = useState([]);
  const [showModal, toggleModal] = useState(false);
  const [addQr, setAddQr] = useState<TQRCode>({
    title: "",
    user: user._id,
    value: "",
  });

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

  const handleAddItem = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (addQr.title == "" || addQr.user == "" || addQr.value == "") {
      toast.error("Title and value is required for QR Code");
    } else {
      const res = await fetch(import.meta.env.VITE_API_BASE_URL + "/qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(addQr),
      });
      const data = await res.json();
      console.log(data);
      toggleModal(false);
      setAddQr({ title: "", user: user._id, value: "" });
      toast.success("QR Code added successfully!");
      getItems();
    }
  };

  return (
    <div className="dashboard">
      <AddIcon onClick={() => toggleModal(true)} />
      {showModal && (
        <Modal>
          <div className="addItem">
            <h2 className="pri-light">Create New QR Code</h2>
            <QRCode value={addQr?.value} size={200} />
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setAddQr({ ...addQr, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Value"
              onChange={(e) => setAddQr({ ...addQr, value: e.target.value })}
            />

            <div className="buttons">
              <button className="cta" onClick={handleAddItem}>
                ADD
              </button>
              <button className="cancel" onClick={() => toggleModal(false)}>
                Cancel
              </button>
            </div>
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
